import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { BonusTypes, MatchScoresType, PointsTypes, TypesScores } from '../types/ComponentsExportsTypes';

interface ExportClassic { first: number, second: number, total: number };
interface ExportMatch { player: number, com: number, win: "" | "Player" | "COM" | "Draw", count: { player: number, com: number } };

export default function useRollsHistory(isActive: boolean) {
    const isScores = useRef<TypesScores[]>([]);
    const isBonus = useRef<BonusTypes[]>([]);
    const isClassic = useRef<ExportClassic>({ first: 0, second: 0, total: 0 });
    const isMatch = useRef<ExportMatch>({ player: 0, com: 0, win: "", count: { player: 0, com: 0 } });
    const isScoresMatch = useRef<MatchScoresType[]>([]);
    const [isID, setID] = useState<number>(1);
    const [isMode, setMode] = useState<"ClassicMode" | "MatchMode" | "">("");
    const isPoints = useRef<PointsTypes>({ player: 0, com: 0, points: { player: 0, com: 0, win: "" }, bonus: { couple: 0, triple: 0, fullrun: 0, poker: 0 } });
    const isStatics = useRef<PointsTypes[]>([]);

    const EditBonus = (isScores: React.RefObject<MatchScoresType[]>, isMemory: boolean) => {

        let ResfullRun = 0;
        let RescoupleBonus = 0;
        let RespokerBonus = 0;
        let RestripleBonus = 0;
        let count = 1;

        for (let key = 0; key < isScores.current.length; key++) {

            const currentRoll = isScores.current[key].player;
            const lastRoll = isScores.current[key - 1] !== undefined ? isScores.current[key - 1].player : 0;

            if(currentRoll === lastRoll) {
            count++

            if (count === 2) RescoupleBonus++;
            if(count === 3) RestripleBonus++;
            if(count === 4) RespokerBonus++;    
            if (count === 5) ResfullRun++;
            } else {
                if (isMemory) {
                    count = 1;
                    RescoupleBonus = 0;
                    RestripleBonus = 0;
                    RespokerBonus = 0;
                    ResfullRun = 0;
                } else {
                    count = 1;
                }
            }
        }

        return { couple: RescoupleBonus, triple: RestripleBonus, poker: RespokerBonus, fullrun: ResfullRun }
    };
     
     const BuildsListStatus = useEffect(() => {

        let FindElement = null;
        let AlternativeList = null;

        if (isMode === "ClassicMode") {

            if(!isActive) return

            setTimeout(() => {
                setID(isID + 1);

                FindElement = isScores.current.some((element) => {
                element.first === isClassic.current.first ||
                element.second === isClassic.current.second ||
                element.total === isClassic.current.total 
                });

                AlternativeList = FindElement ? [...isScores.current] : [...isScores.current, { id: isID, ...isClassic.current }];
                isScores.current = AlternativeList;

                SaveGameSession("Scores", isScores.current)
            }, 4010);

        }

        if (isMode === "MatchMode") {

            if(!isActive) return

            setTimeout(() => {
            setID(isID + 1);

            FindElement = isScoresMatch.current.some((element) => {
                element.player === isMatch.current.player ||
                element.com === isMatch.current.com ||
                element.win === isMatch.current.win 
            });

            AlternativeList = FindElement ? [...isScoresMatch.current] : [...isScoresMatch.current, { id: isID, ...isMatch.current }];
            isScoresMatch.current = AlternativeList; 
            }, 4040)

            setTimeout(() => {
            const BonusResolve = EditBonus(isScoresMatch, false);

            isPoints.current = { player: isMatch.current.count.player, com: isMatch.current.count.com, bonus: BonusResolve };
            SaveGameSession("Points", isPoints.current);
            }, 4053);

            setTimeout(() => {
            const BonusObject = EditBonus(isScoresMatch, true);
            isStatics.current = [...isStatics.current, { id: isID, player: isMatch.current.player, bonus: BonusObject, com: isMatch.current.com, points: { player: isMatch.current.count.player, com: isMatch.current.count.com, win: isMatch.current.win } }];

            SaveGameSession("Statics", isStatics.current);
            SaveGameSession("Match", isScoresMatch.current);
            }, 4090);
            
            
            setTimeout(() => {
              const BonusObj = EditBonus(isScoresMatch, true);
              isBonus.current = [...isBonus.current, { id: isID, bonus: BonusObj }];
              SaveGameSession("Bonus", isBonus.current);
            }, 5010);
        }

     }, [isActive])

     function SaveGameSession(section: string, list: TypesScores[] | MatchScoresType[] | PointsTypes[] | PointsTypes | BonusTypes[]) {
        return sessionStorage.setItem(section, JSON.stringify(list));
     }
    
    return { isScores, isScoresMatch, isMatch, isClassic, setMode, isPoints, isStatics, setID, isBonus }
}
