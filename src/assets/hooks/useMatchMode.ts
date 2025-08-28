import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { type MatchScoresType, type MatchType, type PointsTypes } from '../types/ComponentsExportsTypes';
import useMotionLogic from './useMotionLogic';
import useRollsHistory from './useRollsHistory';

type TypesWin = "Player" | "COM" | "Draw" | "";

export default function useMatchGame() {
    const MatchRef = useRef<MatchType>({ player: null, com: null });
    const [isActiveMatch, setActiveMatch] = useState<boolean>(false);
    const { setTarget, setDiceOne, setDiceTwo } = useMotionLogic(MatchRef.current);
    const { isMatch, isScoresMatch, setMode, isPoints, isStatics } = useRollsHistory(isActiveMatch);
    
    const [isPlayer, setPlayer] = useState<number>(0);
    const [isCOM, setCOM] = useState<number>(0);
    const [isWin, setWin] = useState<string>("");
    const [isOpen, setOpen] = useState(false);

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
              setPlayer(isPlayer + 1)
              setWin(WinMatch)
            } else if (PlayerDice < COMDice) {
              WinMatch = "COM";
              PointsCOM++;
              setCOM(isCOM + 1)
              setWin(WinMatch)
            } else if (PlayerDice === COMDice) {
              WinMatch = "Draw";
              PointsPlayer++;
              PointsCOM++;
              setPlayer(isPlayer + 1)
              setCOM(isCOM + 1)
              setWin(WinMatch)
            }

          setTarget("MatchMode");

           setTimeout(() => {
            setDiceOne(PlayerDice);
            setDiceTwo(COMDice);
           }, 4010);
            

          setMode("MatchMode");

           setTimeout(() => {
            isMatch.current.player = PlayerDice;
            isMatch.current.com = COMDice;
            isMatch.current.win = WinMatch;
            isMatch.current.count.player = PointsPlayer;
            isMatch.current.count.com = PointsCOM;
           }, 4030);

           setTimeout(() => {
             setActiveMatch(false);
           }, 4050);

        }

    }

    useCallback(RollDiceMatch, []);

    return { RollDiceMatch, 
             isPoints, 
             isScoresMatch, 
             isStatics, 
             MatchRef, 
             isActiveMatch, 
             isPlayer, 
             isCOM, 
             isWin }
}
