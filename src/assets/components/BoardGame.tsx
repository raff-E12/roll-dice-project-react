import React, { useState } from 'react'
import Dice from './Dice'
import "./css/BoardBoxStyle.css";
import type { ExportTypes, RefDice } from '../types/ComponentsExportsTypes';
import ModalAdv from './ModalAdv';
import { ExportGlobalContext } from '../context/GlobalContext';
import ButtonComponents from './extra/ButtonComponents';
import PopUpAdv from './extra/PopupAdv';


export default function BoardGame() {
  const { RollDice, DiceTotalRef, isActive, ResetGameMode, isOpen, onClose, setOpen, isMod, setMod } = ExportGlobalContext();
  const [isRolls, setRolls] = useState<boolean>(false);

  return (<>
  <section className='box-border'>
    <aside className='box-board'>
      <div className='interaction-board'>
            <ButtonComponents 
             isClass='btn roll'
             isDisabled={isActive}
             isFunctions={RollDice}
             setRolls={setRolls}
             isText={{ cond: false, text: "" }}
             isIcons='fa-solid fa-dice'
            />

            <ButtonComponents 
             isClass='btn reset'
             isOpen={setOpen}
             isText={{ cond: false, text: "" }}
             isIcons='fa-solid fa-arrow-rotate-left'
            />

        </div>
        <div className='board-dice flex-dice'>
              <Dice DiceRef={(dice) => (DiceTotalRef.current.first = dice)} isCondition={isRolls} setCondition={setRolls}/>
              <Dice DiceRef={(dice) => (DiceTotalRef.current.second = dice)} isCondition={isRolls} setCondition={setRolls}/>
        </div>
        <div className='board-dice-total'>
          <div className='dice-form'></div>
          <div className='dice-form'></div>
        </div>
    </aside>
  </section>

    <PopUpAdv
      isText='Le Risorse sono già vuote.'
      isAdv={isMod}
      setAdv={setMod}
      />
  
  <ModalAdv 
    isOpen={isOpen} 
    onClose={onClose} 
    isTitle={"Avvertimento"}
    isMessage={"Sicuro di Voler Resettare la Partita in Corso."}
    isOption={ResetGameMode}
    />
  </>)
}
