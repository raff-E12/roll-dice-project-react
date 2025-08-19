import React from 'react'
import Dice from './Dice'
import "./css/BoardBoxStyle.css";
import { ExportGlobalContext } from '../context/GlobalContext';

export default function BoardGame() {
  const { RollDice, DiceTotalRef } = ExportGlobalContext();

  return (<>
  <section className='box-border'>
    <aside className='box-board'>
      <div className='interaction-board'>
            <button className="btn roll" onClick={() => RollDice()}><i className="fa-solid fa-dice"></i></button>
            <button className="btn reset"><i className="fa-solid fa-arrow-rotate-left"></i></button>
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
  </>)
}
