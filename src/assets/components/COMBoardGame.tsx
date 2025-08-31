import React from 'react'
import { ExportGlobalContext } from '../context/GlobalContext'
import Dice from './Dice';
import ModalAdv from './ModalAdv';

export default function COMBoardGame() {

  const { RollDiceMatch, MatchRef, isActiveMatch, setReset, ResetMatchMode, isReset } = ExportGlobalContext();
  const onClose = () => setReset(false);

  return (<>
    <section className='box-border'>
      <aside className='box-board'>
        <div className='interaction-board'>
              <button className="btn roll" onClick={() => RollDiceMatch()} disabled={isActiveMatch}><i className="fa-solid fa-dice"></i></button>
              <button className="btn reset" onClick={() => setReset(true)}><i className="fa-solid fa-arrow-rotate-left"></i></button>
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
    <ModalAdv 
      isOpen={isReset}
      isMessage='Sicuro di Voler Resettare la Partita in Corso.'
      isTitle='Avvertimento'
      onClose={onClose}
      isOption={ResetMatchMode}
      />
  </>)
}
