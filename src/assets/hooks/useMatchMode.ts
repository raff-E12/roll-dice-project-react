import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { type BonusTypes, type ExportTypes, type MatchScoresType, type MatchType, type PointsTypes, type TypesScores } from '../types/ComponentsExportsTypes';
import useMotionLogic from './useMotionLogic';
import useRollsHistory from './useRollsHistory';

type TypesWin = "Player" | "COM" | "Draw" | "";
type ListExports = { points: PointsTypes, statics: PointsTypes[], match: MatchScoresType[], bonus: BonusTypes[] };

export default function useMatchGame() {
    const MatchRef = useRef<MatchType>({ player: null, com: null });
    const [isActiveMatch, setActiveMatch] = useState<boolean>(false);
    const { setTarget, setDiceOne, setDiceTwo } = useMotionLogic(MatchRef.current);
    const { isMatch, isScoresMatch, setMode, isPoints, isStatics, setID, isBonus, isID } = useRollsHistory(isActiveMatch);
    
    const [isPlayer, setPlayer] = useState<number>(0);
    const [isCOM, setCOM] = useState<number>(0);
    const [isWin, setWin] = useState<string>("Nothing");
    const [isReset, setReset] = useState<boolean>(false);
    const [isEmpty, setEmpty] = useState<boolean>(false);
    const [isAdv, setAdv] = useState<boolean>(false);

    useEffect(() => {
        if (isStatics.current.length === 0 
            && isScoresMatch.current.length === 0 &&
            Object.values(isPoints.current).length === 0 &&
            Object.keys(isPoints.current).length === 0) setEmpty(true); 
    }, []);

     function RollDiceMatch() {

        let PlayerDice = Math.floor(Math.random() * 6);
        let COMDice = Math.floor(Math.random() * 6);
        let WinMatch: TypesWin = "";
        let PointsPlayer = isPlayer;
        let PointsCOM = isCOM;

        if (PlayerDice >= 1 && PlayerDice <= 6 && COMDice >= 1 && COMDice <= 6) {

            setActiveMatch(true);
          
            if (PlayerDice > COMDice) {
              PointsPlayer++;
              WinMatch = "Player";

              setTimeout(() => {
                setPlayer(isPlayer + 1)
                setWin(WinMatch)
              }, 3010);

            } else if (PlayerDice < COMDice) {
              WinMatch = "COM";
              PointsCOM++;
              
              setTimeout(() => {
              setCOM(isCOM + 1)
              setWin(WinMatch)
              }, 3010);

            } else if (PlayerDice === COMDice) {
              WinMatch = "Draw";
              PointsPlayer++;
              PointsCOM++;
              
              setTimeout(() => {
                setPlayer(isPlayer + 1)
                setCOM(isCOM + 1)
                setWin(WinMatch)
              }, 3010);
            }

          setTarget("MatchMode");

          setDiceOne(PlayerDice);
          setDiceTwo(COMDice);
            

          setMode("MatchMode");

          isMatch.current.player = PlayerDice;
          isMatch.current.com = COMDice;
          isMatch.current.win = WinMatch;
          isMatch.current.count.player = PointsPlayer;
          isMatch.current.count.com = PointsCOM;

           setTimeout(() => {
             setActiveMatch(false);
           }, 4020);

        }

    }

  function ResetMatchMode() {

       if ( (isWin !== "Nothing") || (isPlayer === 0 && isCOM === 0 && isWin === "Nothing") ) {
        setPlayer(0)
        setCOM(0)
        setTarget("MatchMode")
        setDiceOne(1)
        setID(1);
        setDiceTwo(1)
        setReset(false)
        setWin("Nothing");
        setMode("MatchMode");
        isPoints.current = { player: 0, com: 0, points: { player: 0, com: 0, win: "" }, bonus: { couple: 0, triple: 0, fullrun: 0, poker: 0 }};
        isScoresMatch.current = [];
        isStatics.current = [];
        isBonus.current = [];
        sessionStorage.setItem("Points", JSON.stringify([]));
        sessionStorage.setItem("Statics", JSON.stringify([]));
        sessionStorage.setItem("Match", JSON.stringify([]));
        sessionStorage.setItem("Bonus", JSON.stringify([]));
       } else {
         setAdv(true);
         setReset(false);
       }

    }
    
    const ImportSessionMatch =  useMemo(() => {

      const getPoints = sessionStorage.getItem("Points") as string;
      const getStatics = sessionStorage.getItem("Statics") as string;
      const getMatch = sessionStorage.getItem("Match") as string;
      const getBonus = sessionStorage.getItem("Bonus") as string;

        if (getPoints !== null && getStatics !== null && getMatch !== null && getBonus !== null) {
            
            const ParseList: ListExports = { 
              points: JSON.parse(getPoints), 
              statics: JSON.parse(getStatics), 
              match: JSON.parse(getMatch), 
              bonus: JSON.parse(getBonus)
            };

              if (Object.keys(ParseList).length !== 0) {

              isPoints.current = ParseList.points;
              isStatics.current = ParseList.statics;
              isScoresMatch.current = ParseList.match;
              isBonus.current = ParseList.bonus;
              
              const findID = Number(ParseList.match.find(element => element.id === ParseList.match.length)?.id) + 1;
              setID(findID);

              if (isPoints) {
                setCOM(Number((isPoints as React.RefObject<PointsTypes>).current.points?.com));
                setPlayer(Number((isPoints as React.RefObject<PointsTypes>).current.points?.player));
                setWin(String((isPoints as React.RefObject<PointsTypes>).current.points?.win));
              }
              
            }

        } else {
            isPoints.current = { player: 0, com: 0, points: { player: 0, com: 0, win: "" }, bonus: { couple: 0, triple: 0, fullrun: 0, poker: 0 } };
            isStatics.current = [];
            isScoresMatch.current = [];
            isBonus.current = [];
            setID(1);
        }

    }, [isEmpty])
    
    return { RollDiceMatch, 
             isPoints, 
             isScoresMatch, 
             isStatics, 
             MatchRef, 
             isActiveMatch, 
             isPlayer, 
             isCOM, 
             isWin,
             isReset,
             setReset,
             ResetMatchMode,
             ImportSessionMatch,
             isBonus,
             isAdv,
             setAdv,
             isID }
}
