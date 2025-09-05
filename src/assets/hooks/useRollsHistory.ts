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
     
     const BuildsListStatus = useEffect(() => {

        let FindElement = null;
        let AlternativeList = null;
        let tripleBonus = 0;
        let pokerBonus = 0;
        let streak = 1;
        let fullRun = 0;
        let coupleBonus = 0;
        let BonusObject = { couple: 0, triple: 0, poker: 0, fullrun: 0 };
        const PointsList = isScoresMatch.current.map(element => element.id);

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

            for (let key = 0; key < PointsList.length; key++) {
            const currentRoll = isScoresMatch.current[key].player;
            const checkNumber = isScoresMatch.current[key].player;
            const lastRoll = isScoresMatch.current[Number(key) - 1] !== undefined ? isScoresMatch.current[Number(key) - 1].player : 0;

            if (currentRoll === checkNumber && currentRoll === lastRoll) {
            streak++;

            if (streak === 2) coupleBonus++;
            if(streak === 3) tripleBonus++;
            if(streak === 4) pokerBonus++;    
            if (streak === 5) fullRun++;

            BonusObject.couple = coupleBonus;
            BonusObject.fullrun = fullRun;
            BonusObject.poker = pokerBonus;
            BonusObject.triple = tripleBonus;

            } else {
                streak = 1;
                coupleBonus = 0;
                tripleBonus = 0;
                pokerBonus = 0;
                fullRun = 0;
            }

            }

            setTimeout(() => {
            isPoints.current = { player: isMatch.current.count.player, com: isMatch.current.count.com, bonus: BonusObject };
            isStatics.current = [...isStatics.current, { id: isID, player: isMatch.current.player, com: isMatch.current.com, points: { player: isMatch.current.count.player, com: isMatch.current.count.com, win: isMatch.current.win } }];

            SaveGameSession("Points", isPoints.current);
            SaveGameSession("Statics", isStatics.current);
            SaveGameSession("Match", isScoresMatch.current);

            }, 4090);
            
            
            setTimeout(() => {
              const BonusObj = EditBonus(isScoresMatch);
              isBonus.current = [...isBonus.current, { id: isID, bonus: BonusObj }];
              SaveGameSession("Bonus", isBonus.current);
            }, 5010);
        }

     }, [isActive])

     function SaveGameSession(section: string, list: TypesScores[] | MatchScoresType[] | PointsTypes[] | PointsTypes | BonusTypes[]) {
        return sessionStorage.setItem(section, JSON.stringify(list));
     }

     const EditBonus = (isScores: React.RefObject<MatchScoresType[]>) => {

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
                count = 1;
                RescoupleBonus = 0;
                RestripleBonus = 0;
                RespokerBonus = 0;
                ResfullRun = 0;
            }
        }

        return { couple: RescoupleBonus, triple: RestripleBonus, poker: RespokerBonus, fullrun: ResfullRun }
       };
    
    return { isScores, isScoresMatch, isMatch, isClassic, setMode, isPoints, isStatics, setID, isBonus }
}
