import React, { useMemo, useRef, useState } from 'react'
import SoundClickBtn from "../../../../public/sound/button-press-sound.mp3"
import { useNavigate } from 'react-router';

type PropsTypes = { isFunctions?: () => void, 
                    isIcons?: string, 
                    isClass: string, 
                    isText: { cond: boolean, text: string }
                    isOpen?: (value: boolean) => void,
                    setPlay?: (value: boolean) => void,
                    isPlay?: boolean,
                    isNavigate?: { cond: boolean, to: string },
                    isDisabled?: boolean,
                    isTarget?:{ cond: boolean, target: string },
                    setTarget?: (target: string) => void,
                    setClose?: (value: boolean) => void,
                    setRolls?: (value: boolean) => void,
                    };

function ButtonComponents({ isFunctions, isIcons, isClass, isText, isOpen, isPlay, setPlay, isNavigate, isDisabled, isTarget, setTarget, setClose, setRolls }: PropsTypes) {
  
  const AudioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

   function ButtonsClickEvent() {
     
     if (AudioRef.current) {
       AudioRef.current.currentTime = 0;
       AudioRef.current?.play();
     }

     isFunctions?.();
     isOpen?.(true);
     setPlay?.(true);
     setClose?.(false);
     setRolls?.(true);

     if(isPlay) setPlay?.(false);

     if (isNavigate?.cond) {
        navigate(isNavigate.to);
     }

     if (isTarget?.cond) {
        setTarget?.(isTarget.target);
     }

   }

  return (<>
  <button className={isClass} onClick={ButtonsClickEvent} disabled={isDisabled}>{isText.cond ? isText.text : <i className={isIcons}></i> }</button>
  <audio preload="auto" className="box-hidden" controls ref={AudioRef}>
     <source src={SoundClickBtn} type='audio/mpeg' />
  </audio>
  </>)
}

export default React.memo(ButtonComponents)
