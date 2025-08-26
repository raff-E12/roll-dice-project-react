import React from 'react'
import { ExportGlobalContext } from '../context/GlobalContext'
import Dice from './Dice';

export default function COMBoardGame() {

  const { RollDiceMatch, MatchRef, isActiveMatch } = ExportGlobalContext();

  return (<>
    <section className='box-border'>
      <aside className='box-board'>
        <div className='interaction-board'>
              <button className="btn roll" onClick={() => RollDiceMatch()} disabled={isActiveMatch}><i className="fa-solid fa-dice"></i></button>
              <button className="btn reset"><i className="fa-solid fa-arrow-rotate-left"></i></button>
          </div>
          <div className='board-dice flex-dice'>
                <Dice DiceRef={(dice) => (MatchRef.current.player = dice)}/>
                <Dice DiceRef={(dice) => (MatchRef.current.com = dice)}/>
          </div>
          <div className='board-dice-total'>
            <div className='dice-form'></div>
            <div className='dice-form'></div>
          </div>
      </aside>
    </section>
  </>)
}
