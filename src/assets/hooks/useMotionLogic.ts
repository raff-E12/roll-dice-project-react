import React, { useEffect, useMemo, useState } from 'react'
import type { MatchType, RefDice, TypesDice } from '../types/ComponentsExportsTypes';

function useMotionLogic(DiceRefGame: TypesDice | MatchType) {

    const [isTarget, setTarget] = useState<"ClassicMode" | "MatchMode" | "">("");
    const [isDiceOne, setDiceOne] = useState<number>(0);
    const [isDiceTwo, setDiceTwo] = useState<number>(0);

    useEffect(() => {

    if (!isTarget) return;

    if (isTarget === "ClassicMode") {
        MotionDice((DiceRefGame as TypesDice).first, isDiceOne);
        MotionDice((DiceRefGame as TypesDice).second, isDiceTwo);
    }

    if (isTarget === "MatchMode") {
        MotionDice((DiceRefGame as MatchType).player, isDiceOne);
        MotionDice((DiceRefGame as MatchType).com, isDiceTwo);
    }


    },[isTarget, DiceRefGame, isDiceOne, isDiceTwo])

    function MotionDice(dice: HTMLDivElement | null, number: number) {

        if (!dice) return;

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
       }, 4039);

    }
    
    return { setTarget, setDiceOne, setDiceTwo };
}

export default useMotionLogic