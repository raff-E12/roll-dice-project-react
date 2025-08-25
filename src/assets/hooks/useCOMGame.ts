import React, { useRef, useState } from 'react'
import { type MathScoresType, type MathType, type PointsTypes } from '../types/ComponentsExportsTypes';

type TypesWin = "Player" | "COM" | "Draw" | "";

export default function useMatchGame() {
    const [isPlayer, setPlayer] = useState<number>(0);
    const [isCOM, setCOM] = useState<number>(0);
    const MatchRef = useRef<MathType>({ player: null, com: null });
    const isScores = useRef<MathScoresType[]>([]);
    const isPoints = useRef<PointsTypes | {}>({});
    const isStatics = useRef<PointsTypes[]>([]);
    const [isActive, setActive] = useState<boolean>(false);
    const [isID, setID] = useState<number>(0);
    const [isWin, setWin] = useState<string>("");
    const [isOpen, setOpen] = useState(false);
    const [isText, setText] = useState<string>("");

     function RollDiceMatch() {

        let PlayerDice = Math.floor(Math.random() * 6);
        let COMDice = Math.floor(Math.random() * 6);
        let WinMatch: TypesWin = "";
        let PointsPlayer = 0;
        let PointsCOM = 0;

        if (PlayerDice >= 1 && PlayerDice <= 6 && COMDice >= 1 && COMDice <= 6) {

            if (PlayerDice > COMDice) {
            PointsPlayer += 1;
            WinMatch = "Player";
            } else if (PlayerDice < COMDice) {
            WinMatch = "COM";
            PointsCOM += 1;
            } else if (PlayerDice === COMDice) {
            WinMatch = "Draw";
            PointsPlayer += 1;
            PointsCOM += 1;
            }
        
            setTimeout(() => {
                setPlayer(PlayerDice);
                setCOM(COMDice);
            }, 4050);

            // DiceInput(PlayerDice, COMDice);
            // setActive(true);
            ListThrownBuilds(PlayerDice, COMDice, WinMatch);
            SetBonusStatics(PointsPlayer, PointsCOM, isID);
        }

    }


    function ListThrownBuilds(playerNum: number, comNum: number, results: TypesWin ){

        setTimeout(() => {
            setID(isID + 1);
            const BuildsList = { id: isID, player: playerNum, com: comNum, win: results };

            let FindElement = isScores.current.some((element) => {
                element.player === BuildsList.player ||
                element.com === BuildsList.com ||
                element.win === BuildsList.win
            });

            let AlternativeList = FindElement ? [...isScores.current] : [...isScores.current, BuildsList];
            isScores.current = AlternativeList;
        }, 4050);

    }

    function SetBonusStatics(playerNum: number, comNum:number, countID: number){
        let tripleBonus = 0;
        let pokerBonus = 0;
        let streak = 1;
        let fullRun = 0;
        let coupleBonus = 0;
        let BonusObject = { couple: 0, triple: 0, poker: 0, fullrun: 0 };
        const PointsList = isScores.current.map(element => element.id);

        for (let key = 0; key < PointsList.length; key++) {
          const currentRoll = isScores.current[key].player;
          const checkNumber = isScores.current[key].player;
          const lastRoll = isScores.current[Number(key) - 1] !== undefined ? isScores.current[Number(key) - 1].player : 0;

          console.log({ currentRoll, checkNumber, lastRoll });

          if (currentRoll === checkNumber && currentRoll === lastRoll) {
             streak++

             if (streak === 2) {
               coupleBonus++;
             }
            
             if(streak === 3) {
               tripleBonus++;
            }
             
            if(streak === 4) {
               pokerBonus++;
            }
             
            if (streak === 5) {
               fullRun++;
            }

            BonusObject.couple = coupleBonus;
            BonusObject.fullrun = fullRun;
            BonusObject.poker = pokerBonus;
            BonusObject.triple = tripleBonus;

          } else {
            streak = 1;
          }

        }

        isPoints.current = { player: playerNum, com: comNum, bonus: BonusObject };
        isStatics.current = [...isStatics.current, { id: countID, player: playerNum, com: comNum,  bonus: BonusObject }];
    }

    console.log(isScores.current);
    console.log(isPoints.current);

    return { RollDiceMatch }
}
