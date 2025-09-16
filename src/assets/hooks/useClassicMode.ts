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
    const [isEmpty, setEmpty] = useState<boolean>(false);
    const [isMod, setMod] = useState<boolean>(false);

    const onClose = () => setOpen(false);
    const { setTarget, setDiceOne, setDiceTwo } = useMotionLogic(DiceTotalRef.current);
    const { isScores, isClassic, setMode, setID, isID } = useRollsHistory(isActive);

    useEffect(() => {
        if (isScores.current.length === 0) setEmpty(true); 
    }, []);

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
        if (isFirst !== 0 && isSecond !== 0 && isTotal !== 0) {
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
            sessionStorage.setItem("Scores", JSON.stringify([]));
        } else {
            setMod(true);
            setOpen(false);
        }
    }

    const ImportSessionList = useMemo(() => {
        const getScores = sessionStorage.getItem("Scores") as string;
        if (getScores !== null && getScores.length !== 0) {
            const listScores: TypesScores[] = JSON.parse(getScores);
            const findID = Number(listScores.find(element => element.id === listScores.length)?.id) + 1;
            isScores.current = listScores;
            setID(findID);

            if (isScores.current.length !== 0 && isID) {
                setFirst((isScores as React.RefObject<TypesScores[]>).current[isID]?.first);
                setSecond((isScores as React.RefObject<TypesScores[]>).current[isID]?.second);
                setTotal((isScores as React.RefObject<TypesScores[]>).current[isID]?.total);
            }

        } else {
            isScores.current = [];
            setID(1);
        }
    },[isEmpty]);

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
             setOpen,
             setMod,
             isMod };
}