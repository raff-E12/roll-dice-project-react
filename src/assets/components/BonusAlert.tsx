import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { BonusTypes } from '../types/ComponentsExportsTypes';
import "../components/css/ModalsAdv.css"
import SoundBonus from "../../../public/sound/bonus_sound.mp3"
import ButtonComponents from './extra/ButtonComponents';

type PropsTypes = { isReset: boolean, isActive: boolean, isBonus: BonusTypes[] };
type BonusSpecs = "Couple" | "FullRun" | "Triple" | "Poker" | "";

function BonusAlert({ isReset, isActive, isBonus }: PropsTypes) {
  const [isTarget, setTarget] = useState<BonusSpecs>("");
  const [isAlert, setAlert] = useState<boolean>(false);
  const [isCount, setCount] = useState<number>(0);
  const AudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isReset) return
    setCount(0);
    sessionStorage.setItem("Count", String(0));
  }, [isReset]);

  useEffect(() => {
    let storage = Number(sessionStorage.getItem("Count"));
    setCount(storage);
  }, []);

  const AudioPlay = useMemo(() => {
    requestAnimationFrame(() => {
    if (isAlert && isTarget !== "") {
      AudioRef.current?.play();
    }
    });
  },[isActive])

  const CountLogic = useMemo(() => {

    if (!isActive) return
    let PrevNumber = Math.abs(isBonus.length - 1);

    if (isCount < PrevNumber) {
      setCount(isCount + 2);
    } else {
      setCount(isCount - 1);
    }

  }, [isActive])

  const AlertCaseActive = useMemo(() => {

      if (isBonus.length !== 0 && isCount > 0) {

        let MemoryCouple = isBonus[isCount].bonus.couple;
        let MemoryTriple = isBonus[isCount].bonus.triple;
        let MemoryFullRun = isBonus[isCount].bonus.fullrun;
        let MemoryPoker = isBonus[isCount].bonus.poker;

          if (MemoryCouple === 1) {
              setAlert(true);
              setTarget("Couple");
              sessionStorage.setItem("Count", String(isCount));
          }

          if (MemoryFullRun === 1) {
              setAlert(true);
              setTarget("FullRun");
              sessionStorage.setItem("Count", String(isCount));
          }

          if (MemoryTriple === 1) {
              setAlert(true);
              setTarget("Triple");
              sessionStorage.setItem("Count", String(isCount));
          } 

          if (MemoryPoker === 1) {
              setAlert(true);
              setTarget("Poker");
              sessionStorage.setItem("Count", String(isCount));
          } 

      } else {
        setAlert(false);
      }
     
  },[isActive]);

  return (<>
  <div className={`container-full flex-start container-support ${isAlert && "open" || !isAlert && "hidden"}`}>

    <div className='bonus-sc'>
        
     {isTarget === "Couple" && <div className={`container-banner bonus-3 ${isAlert && "open-ani"}`}></div>}

     {isTarget === "Triple" && <div className={`container-banner bonus-1 ${isAlert && "open-ani"}`}></div>}

     {isTarget === "FullRun" && <div className={`container-banner bonus-2 ${isAlert && "open-ani"}`}></div>}

     {isTarget === "Poker" && <div className={`container-banner bonus-4 ${isAlert && "open-ani"}`}></div>}

     <div className={`bonus-light ${isAlert && "open-ani"}`}></div>

     <div className='w-full flex justify-center items-center p-3'>
        <ButtonComponents 
        isClass='btn exit'
        isText={{ cond: true, text: "Esci"}}
        setClose={setAlert}
        />
     </div>
    </div>

    <audio className='absolute top-1 right-1 hidden' preload='auto' controls ref={AudioRef}>
      <source src={SoundBonus} type='audio/mpeg' />
    </audio>
  </div>
  </>)
}

export default React.memo(BonusAlert)