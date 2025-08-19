import React, { useRef, useState } from 'react'

type TypesScores =  { id: number, first: number, second: number };
type TypesDice = { first: HTMLDivElement | null, second: HTMLDivElement | null };

export default function useDiceScheme() {

    const [DiceFirst, setFirst] = useState<number>(0);
    const [DiceSecond, setSecond] = useState<number>(0);
    const DiceTotalRef = useRef<TypesDice>({ first: null, second: null });
    const [isScores, SetScores] = useState<TypesScores[]>([]);
    const [isActive, setActive] = useState<boolean>(false);
    const [isFinished, setFinished] = useState<boolean>(false);
    const [isText, SetText] = useState<string>("");
    const [isTotal, setTotal] = useState<number>(0);

    function RollDice() {

        let FirstDice = Math.floor(Math.random() * 6);
        let SecondDice = Math.floor(Math.random() * 6);

        if (FirstDice >= 1 && FirstDice  <= 6 && SecondDice >= 1 && SecondDice <= 6) {
            setFirst(FirstDice);
            setSecond(SecondDice);
            AnimationRollDice(DiceFirst, DiceSecond);
        }

    }

    function AnimationRollDice(random: number, COM: number): void {
        
        DiceTotalRef.current.first!.style.animation = "rolling 4s";
        DiceTotalRef.current.second!.style.animation = "rolling 4s";
        
        if (Object.keys(DiceTotalRef.current).length !== 0 && random !== 0 && COM !== 0) {
           setTimeout(() => {

            switch (random) {
                case 1:
                DiceTotalRef.current.first!.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
    
                case 6:
                DiceTotalRef.current.first!.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
    
                case 2:
                DiceTotalRef.current.first!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
    
                case 5:
                DiceTotalRef.current.first!.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
    
                case 3:
                DiceTotalRef.current.first!.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
    
                case 4:
                DiceTotalRef.current.first!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
              }
    
        
            switch (COM) {
                case 1:
                 DiceTotalRef.current.second!.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
        
                case 6:
                 DiceTotalRef.current.second!.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
        
                case 2:
                 DiceTotalRef.current.second!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
        
                case 5:
                 DiceTotalRef.current.second!.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
        
                case 3:
                 DiceTotalRef.current.second!.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
        
                case 4:
                 DiceTotalRef.current.second!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
                }
    
             DiceTotalRef.current.first!.style.animation = "none";
             DiceTotalRef.current.second!.style.animation = "none";

           }, 4050);
        }
    }

    return { RollDice, DiceTotalRef };
}