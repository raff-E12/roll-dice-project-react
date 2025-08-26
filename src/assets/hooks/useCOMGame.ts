import React, { useRef, useState } from 'react'
import { type MatchScoresType, type MatchType, type PointsTypes } from '../types/ComponentsExportsTypes';

type TypesWin = "Player" | "COM" | "Draw" | "";

export default function useMatchGame() {
    const [isPlayer, setPlayer] = useState<number>(0);
    const [isCOM, setCOM] = useState<number>(0);
    const MatchRef = useRef<MatchType>({ player: null, com: null });
    const isScoresMatch = useRef<MatchScoresType[]>([]);
    const isPoints = useRef<PointsTypes>({ player: 0, com: 0, points: { player: 0, com: 0, win: "" }});
    const isStatics = useRef<PointsTypes[]>([]);
    const [isActiveMatch, setActiveMatch] = useState<boolean>(false);
    const [isID, setID] = useState<number>(0);
    const [isWin, setWin] = useState<string>("");
    const [isOpen, setOpen] = useState(false);

     function RollDiceMatch() {

        let PlayerDice = Math.floor(Math.random() * 6);
        let COMDice = Math.floor(Math.random() * 6);
        let WinMatch: TypesWin = "";
        let PointsPlayer = 0;
        let PointsCOM = 0;

        if (PlayerDice >= 1 && PlayerDice <= 6 && COMDice >= 1 && COMDice <= 6) {

            if (PlayerDice > COMDice) {
            PointsPlayer++;
            WinMatch = "Player";
            } else if (PlayerDice < COMDice) {
            WinMatch = "COM";
            PointsCOM++;
            } else if (PlayerDice === COMDice) {
            WinMatch = "Draw";
            PointsPlayer++;
            PointsCOM++;
            }
        
            setTimeout(() => {
                if (PlayerDice > COMDice) {
                setPlayer(isPlayer + 1)
                setWin(WinMatch)
                } else if (PlayerDice < COMDice) {
                setCOM(isCOM + 1)
                setWin(WinMatch)
                } else if (PlayerDice === COMDice) {
                setPlayer(isPlayer + 1)
                setCOM(isCOM + 1)
                setWin(WinMatch)
                }
            }, 4050);

            DiceInput(PlayerDice, COMDice);
            setActiveMatch(true);
            ListThrownBuilds(PlayerDice, COMDice, WinMatch);
            SetBonusStatics(PlayerDice, COMDice, isID, PointsPlayer, PointsCOM);
        }

    }


    function ListThrownBuilds(playerNum: number, comNum: number, results: TypesWin){

        setTimeout(() => {
            setID(isID + 1);
            const BuildsList = { id: isID, player: playerNum, com: comNum, win: results };

            let FindElement = isScoresMatch.current.some((element) => {
                element.player === BuildsList.player ||
                element.com === BuildsList.com ||
                element.win === BuildsList.win
            });

            let AlternativeList = FindElement ? [...isScoresMatch.current] : [...isScoresMatch.current, BuildsList];
            isScoresMatch.current = AlternativeList;
        }, 4050);

    }

    function SetBonusStatics(playerNum: number, comNum:number, countID: number, pointsPlayer: number, pointsCOM: number){
        let tripleBonus = 0;
        let pokerBonus = 0;
        let streak = 1;
        let fullRun = 0;
        let coupleBonus = 0;
        let BonusObject = { couple: 0, triple: 0, poker: 0, fullrun: 0 };
        const PointsList = isScoresMatch.current.map(element => element.id);

        for (let key = 0; key < PointsList.length; key++) {
          const currentRoll = isScoresMatch.current[key].player;
          const checkNumber = isScoresMatch.current[key].player;
          const lastRoll = isScoresMatch.current[Number(key) - 1] !== undefined ? isScoresMatch.current[Number(key) - 1].player : 0;

        //   console.log({ currentRoll, checkNumber, lastRoll });

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

        setTimeout(() => {
          isPoints.current = { player: pointsPlayer, com: pointsCOM, bonus: BonusObject };
          isStatics.current = [...isStatics.current, { id: countID, player: playerNum, com: comNum,  bonus: BonusObject, points: { player: pointsPlayer, com: pointsCOM } }];
        }, 4240);
    }

    function DiceInput(player: number, com: number): void {
        
        if (Object.keys(MatchRef.current).length !== 0 && player !== 0 && com !== 0) {
            
            setTimeout(() => {
                MotionDice(MatchRef.current.player, player);
                MotionDice(MatchRef.current.com, com);
            }, 900);

        }
    }

    function MotionDice(dice: HTMLDivElement | null, number: number) {
        dice!.style.animation = "rolling 4s";
        dice!.classList.add("roll");

        switch (number) {
                case 1:
                dice!.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
        
                case 6:
                dice!.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
        
                case 2:
                dice!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
        
                case 5:
                dice!.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
        
                case 3:
                dice!.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
        
                case 4:
                dice!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
            }

      setTimeout(() => {
            dice!.style.animation = "none";
            dice!.classList.remove("roll");
            setActiveMatch(false);
       }, 4000);

    }

    return { RollDiceMatch, 
             isPoints, 
             isScoresMatch, 
             isStatics, 
             MatchRef, 
             isActiveMatch, 
             isPlayer, 
             isCOM, 
             isWin,
              }
}
