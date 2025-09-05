import React, { useState } from 'react'
import Dice from './Dice'
import "./css/BoardBoxStyle.css";
import type { ExportTypes, RefDice } from '../types/ComponentsExportsTypes';
import ModalAdv from './ModalAdv';
import { ExportGlobalContext } from '../context/GlobalContext';


export default function BoardGame() {
  const { RollDice, DiceTotalRef, isActive, ResetGameMode, isOpen, onClose, setOpen } = ExportGlobalContext();

  return (<>
  <section className='box-border'>
    <aside className='box-board'>
      <div className='interaction-board'>
            <button className="btn roll" onClick={() => RollDice()} disabled={isActive}><i className="fa-solid fa-dice"></i></button>
            <button className="btn reset" onClick={() => setOpen(true)}><i className="fa-solid fa-arrow-rotate-left"></i></button>
        </div>
        <div className='board-dice flex-dice'>
              <Dice DiceRef={(dice) => (DiceTotalRef.current.first = dice)}/>
              <Dice DiceRef={(dice) => (DiceTotalRef.current.second = dice)}/>
        </div>
        <div className='board-dice-total'>
          <div className='dice-form'></div>
          <div className='dice-form'></div>
        </div>
    </aside>
  </section>
  
  <ModalAdv 
    isOpen={isOpen} 
    onClose={onClose} 
    isTitle={"Avvertimento"}
    isMessage={"Sicuro di Voler Resettare la Partita in Corso."}
    isOption={ResetGameMode}
    />
  </>)
}
