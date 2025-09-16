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
    if (isReset) {
      setCount(0);
      sessionStorage.setItem("Count", "0");
    }
  }, [isReset]);

  useEffect(() => {
    const storage = Number(sessionStorage.getItem("Count") ?? 0);
    setCount(storage);
  }, []);

  useEffect(() => {
    if (isAlert && isTarget !== "") {
      requestAnimationFrame(() => {
        AudioRef.current?.play();
      });
    }
  }, [isAlert, isTarget]);

  useEffect(() => {
    if (!isActive) return;
    if (isBonus.length === 0) return;

    let PrevNumber = isBonus.length - 1;

    setCount(prev => {
      const next = prev < PrevNumber ? prev + 1 : PrevNumber;
      sessionStorage.setItem("Count", String(next));
      return next;
    });
  }, [isActive, isBonus]);

  useEffect(() => {
    if (!isActive || isBonus.length === 0 || isCount < 0) {
      setAlert(false);
      return;
    }

      const bonus = isBonus[isCount]?.bonus;
      if (!bonus) return;

      if (bonus.couple === 1) {
        setTarget("Couple");
        setAlert(true);
      } else if (bonus.fullrun === 1) {
        setTarget("FullRun");
        setAlert(true);
      } else if (bonus.triple === 1) {
        setTarget("Triple");
        setAlert(true);
      } else if (bonus.poker === 1) {
        setTarget("Poker");
        setAlert(true);
      } else {
        setAlert(false);
      }
      
    }, [isActive, isBonus, isCount]);

  return (<>
  <div className={`container-full flex-start container-support ${isAlert && "open" || !isAlert && "hidden"}`}>

    <div className='bonus-sc'>
        
     {isTarget === "Couple" && <div className={`container-banner bonus-3 ${isAlert && "open-ani"}`}></div>}

     {isTarget === "Triple" && <div className={`container-banner bonus-1 ${isAlert && "open-ani"}`}></div>}

     {isTarget === "FullRun" && <div className={`container-banner bonus-2 ${isAlert && "open-ani"}`}></div>}

     {isTarget === "Poker" && <div className={`container-banner bonus-4 ${isAlert && "open-ani"}`}></div>}

     <div className={`bonus-light ${isAlert && "open-ani"}`}></div>
{/* 
     <div className='w-full flex justify-center items-center p-3'>
        <ButtonComponents 
        isClass='btn exit'
        isText={{ cond: true, text: "Esci"}}
        setClose={setAlert}
        />
     </div> */}

    </div>

    <audio className='absolute top-1 right-1 hidden' preload='auto' controls ref={AudioRef}>
      <source src={SoundBonus} type='audio/mpeg' />
    </audio>
  </div>
  </>)
}

export default React.memo(BonusAlert)