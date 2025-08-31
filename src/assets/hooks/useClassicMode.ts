import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { TextDiceThrowing, TypesDice, TypesScores } from '../types/ComponentsExportsTypes';
import useMotionLogic from './useMotionLogic';
import useRollsHistory from './useRollsHistory';

export default function useClassicGame() {

    const [isFirst, setFirst] = useState<number>(0);
    const [isSecond, setSecond] = useState<number>(0);
    const DiceTotalRef = useRef<TypesDice>({ first: null, second: null });

    const [isActive, setActive] = useState<boolean>(false);
    const [isTotal, setTotal] = useState<number>(0);
    const [isOpen, setOpen] = useState<boolean>(false);

    const onClose = () => setOpen(false);
    const { setTarget, setDiceOne, setDiceTwo } = useMotionLogic(DiceTotalRef.current);
    const { isScores, isClassic, setMode, setID } = useRollsHistory(isActive);

    function RollDice () {

        let FirstDice = Math.floor(Math.random() * 6);
        let SecondDice = Math.floor(Math.random() * 6);
        let TotalDice = FirstDice + SecondDice;

        if (FirstDice >= 1 && FirstDice  <= 6 && SecondDice >= 1 && SecondDice <= 6) {
             
            setActive(true);

            setTimeout(() => {
                setFirst(FirstDice);
                setSecond(SecondDice);
                setTotal(TotalDice);
            }, 4050);

            setTarget("ClassicMode");
            setDiceOne(FirstDice);
            setDiceTwo(SecondDice);
            
            setMode("ClassicMode");
            isClassic.current.first = FirstDice;
            isClassic.current.second = SecondDice;
            isClassic.current.total = TotalDice;

            setTimeout(() => {
               setActive(false);
            }, 4050);

        }
    }

    function ResetGameMode() {
        setFirst(0);
        setSecond(0);
        setTotal(0);
        setTarget("ClassicMode")
        setDiceOne(1)
        setID(1);
        setDiceTwo(1)
        setOpen(false);
        setMode("ClassicMode");
        isClassic.current.first = 0;
        isClassic.current.second = 0;
        isClassic.current.total = 0;
        isScores.current = [];
    }

    return { RollDice, 
             DiceTotalRef, 
             isActive, 
             isTotal, 
             isScores, 
             isFirst, 
             isSecond, 
             ResetGameMode, 
             isOpen, 
             onClose,
             setOpen };
}