import React, { useEffect, useRef, useState } from 'react'
import type { MatchScoresType, PointsTypes, TypesScores } from '../types/ComponentsExportsTypes';

interface ExportClassic { first: number, second: number, total: number };
interface ExportMatch { player: number, com: number, win: "" | "Player" | "COM" | "Draw", count: { player: number, com: number } };

export default function useRollsHistory(isActive: boolean) {
    const isScores = useRef<TypesScores[]>([]);
    const isClassic = useRef<ExportClassic>({ first: 0, second: 0, total: 0 });
    const isMatch = useRef<ExportMatch>({ player: 0, com: 0, win: "", count: { player: 0, com: 0 } });
    const isScoresMatch = useRef<MatchScoresType[]>([]);
    const [isID, setID] = useState<number>(1);
    const [isMode, setMode] = useState<"ClassicMode" | "MatchMode" | "">("");
    const isPoints = useRef<PointsTypes>({ player: 0, com: 0, points: { player: 0, com: 0, win: "" }});
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

                sessionStorage.setItem("Scores", JSON.stringify(isScores.current))
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
                streak++

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
            }

            }

            setTimeout(() => {
            isPoints.current = { player: isMatch.current.count.player, com: isMatch.current.count.com, bonus: BonusObject };
            isStatics.current = [...isStatics.current, { id: isID, player: isMatch.current.player, com: isMatch.current.com, bonus: BonusObject, points: { player: isMatch.current.count.player, com: isMatch.current.count.com } }];

            sessionStorage.setItem("Points", JSON.stringify(isPoints.current));
            sessionStorage.setItem("Statics", JSON.stringify(isStatics.current));
            }, 4050);
            
        }

     }, [isActive])
    
    return { isScores, isScoresMatch, isMatch, isClassic, setMode, isPoints, isStatics, setID }
}
