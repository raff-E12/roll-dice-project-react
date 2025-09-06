import React, { useMemo, useRef, type Ref } from 'react'
import "./css/DiceStyle.css"
import DiceSoundGame from "../../../public/sound/dice_throwing.mp3"


type PropsDice = { DiceRef: (dice: HTMLDivElement) => void, isCondition: boolean, setCondition: (value: boolean) => void };

export default function Dice({DiceRef, isCondition, setCondition}: PropsDice) {
  const AudioRef = useRef<HTMLAudioElement>(null);

  const ClickSoundDice = useMemo(() => {
     setTimeout(() => {
      if (isCondition) {
        AudioRef.current?.play();
        setCondition(false);
      }
     }, 1600);
  },[isCondition]);

  return (<>
    <div className="dice" ref={DiceRef}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
    </div>
    
    <audio className='absolute top-1 right-1 hidden' preload='auto' controls ref={AudioRef}>
       <source src={DiceSoundGame} type='audio/mpeg'/>
    </audio>
  </>)
}
