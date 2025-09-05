import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { type ExportTypes, type MatchScoresType, type MatchType, type PointsTypes, type TypesScores } from '../types/ComponentsExportsTypes';
import useMotionLogic from './useMotionLogic';
import useRollsHistory from './useRollsHistory';

type TypesWin = "Player" | "COM" | "Draw" | "";
type ListExports = { points: PointsTypes, statics: PointsTypes[], match: MatchScoresType[] };

export default function useMatchGame() {
    const MatchRef = useRef<MatchType>({ player: null, com: null });
    const [isActiveMatch, setActiveMatch] = useState<boolean>(false);
    const { setTarget, setDiceOne, setDiceTwo } = useMotionLogic(MatchRef.current);
    const { isMatch, isScoresMatch, setMode, isPoints, isStatics, setID, isBonus } = useRollsHistory(isActiveMatch);
    
    const [isPlayer, setPlayer] = useState<number>(0);
    const [isCOM, setCOM] = useState<number>(0);
    const [isWin, setWin] = useState<string>("Nothing");
    const [isReset, setReset] = useState(false);
    const [isEmpty, setEmpty] = useState(false);

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
              }, 4010);

            } else if (PlayerDice < COMDice) {
              WinMatch = "COM";
              PointsCOM++;
              
              setTimeout(() => {
              setCOM(isCOM + 1)
              setWin(WinMatch)
              }, 4010);

            } else if (PlayerDice === COMDice) {
              WinMatch = "Draw";
              PointsPlayer++;
              PointsCOM++;
              
              setTimeout(() => {
                setPlayer(isPlayer + 1)
                setCOM(isCOM + 1)
                setWin(WinMatch)
              }, 4010);
            }

          setTarget("MatchMode");

           setTimeout(() => {
            setDiceOne(PlayerDice);
            setDiceTwo(COMDice);
           }, 500);
            

          setMode("MatchMode");

          setTimeout(() => {
            isMatch.current.player = PlayerDice;
            isMatch.current.com = COMDice;
            isMatch.current.win = WinMatch;
            isMatch.current.count.player = PointsPlayer;
            isMatch.current.count.com = PointsCOM;
           }, 4020);

           setTimeout(() => {
             setActiveMatch(false);
           }, 4030);

        }

    }

      function ResetMatchMode() {
        setPlayer(0)
        setCOM(0)
        setTarget("MatchMode")
        setDiceOne(1)
        setID(1);
        setDiceTwo(1)
        setReset(false);
        setMode("MatchMode");
        isPoints.current = { player: 0, com: 0, points: { player: 0, com: 0, win: "" }, bonus: { couple: 0, triple: 0, fullrun: 0, poker: 0 }};
        isScoresMatch.current = [];
        isStatics.current = [];
        isBonus.current = [];
        sessionStorage.settItem("Points", JSON.stringify([]));
        sessionStorage.settItem("Statics", JSON.stringify([]));
        sessionStorage.settItem("Match", JSON.stringify([]));
        sessionStorage.setItem("Bonus", JSON.stringify([]));
    }

    
    const ImportSessionMatch =  useMemo(() => {
      const getPoints = sessionStorage.getItem("Points") as string;
      const getStatics = sessionStorage.getItem("Statics") as string;
      const getMatch = sessionStorage.getItem("Match") as string;
        if (getPoints !== null && getStatics !== null) {
            const ParseList: ListExports = { points: JSON.parse(getPoints), statics: JSON.parse(getStatics), match: JSON.parse(getMatch)};
            isPoints.current = ParseList.points;
            isStatics.current = ParseList.statics;
            isScoresMatch.current = ParseList.match;
            
            const findID = Number(ParseList.match.find(element => element.id === ParseList.match.length)?.id) + 1;
            setID(findID);
        } else {
            isPoints.current = { player: 0, com: 0, points: { player: 0, com: 0, win: "" }, bonus: { couple: 0, triple: 0, fullrun: 0, poker: 0 } };
            isStatics.current = [];
            isScoresMatch.current = [];
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
             isBonus }
}
