import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { TextDiceThrowing, TypesDice, TypesScores } from '../types/ComponentsExportsTypes';

export default function useDiceScheme() {

    const [isFirst, setFirst] = useState<number>(0);
    const [isSecond, setSecond] = useState<number>(0);
    const DiceTotalRef = useRef<TypesDice>({ first: null, second: null });
    const isScores = useRef<TypesScores[]>([]);
    const [isActive, setActive] = useState<boolean>(false);
    const [isID, setID] = useState<number>(1);
    const [isTotal, setTotal] = useState<number>(0);

    function RollDice() {

        let FirstDice = Math.floor(Math.random() * 6);
        let SecondDice = Math.floor(Math.random() * 6);
        let TotalDice = FirstDice + SecondDice;

        if (FirstDice >= 1 && FirstDice  <= 6 && SecondDice >= 1 && SecondDice <= 6) {
        
            setTimeout(() => {
                setFirst(FirstDice);
                setSecond(SecondDice);
                setTotal(TotalDice);
            }, 4050);

            DiceInput(FirstDice, SecondDice);
            setActive(true);
            ListThrownBuilds(FirstDice, SecondDice, TotalDice); 
        }

    }

    function ListThrownBuilds(firstNum: number, secondNum:number, totalNum:number){

        setTimeout(() => {
            setID(isID + 1);
            const BuildsList = { id: isID, first: firstNum, second: secondNum, total: totalNum };

            let FindElement = isScores.current.some((element) => {
                element.first === BuildsList.first ||
                element.second === BuildsList.second ||
                element.total === BuildsList.total 
            });

            let AlternativeList = FindElement ? [...isScores.current] : [...isScores.current, BuildsList];
            isScores.current = AlternativeList;
        }, 4050);

    }

    function DiceInput(first: number, second: number): void {
        
        if (Object.keys(DiceTotalRef.current).length !== 0 && first !== 0 && second !== 0) {
            
            setTimeout(() => {
                MotionDice(DiceTotalRef.current.first, first);
                MotionDice(DiceTotalRef.current.second, second);
            }, 900);

        }
    }

     function MotionDice(dice: HTMLDivElement | null, number: number) {
        dice!.style.animation = "rolling 4s";

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
            setActive(false);
       }, 4000);

    }

    function ResetGameMode() {
        setFirst(0);
        setSecond(0);
        setTotal(0);
        MotionDice(DiceTotalRef.current.first, 1);
        MotionDice(DiceTotalRef.current.second, 1);
        window.alert("Resettato il valore di gioco!!");
    }

    console.log(isScores);

    return { RollDice, DiceTotalRef, isActive, isTotal, isScores, isFirst, isSecond, ResetGameMode };
}