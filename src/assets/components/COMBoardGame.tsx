import React, { useState } from 'react'
import { ExportGlobalContext } from '../context/GlobalContext'
import Dice from './Dice';
import ModalAdv from './ModalAdv';
import ButtonComponents from './extra/ButtonComponents';
import PopUpAdv from './extra/PopupAdv';
import "../components/css/BoardBoxStyle.css"

export default function COMBoardGame() {

  const { RollDiceMatch, MatchRef, isActiveMatch, setReset, ResetMatchMode, isReset, isAdv, setAdv } = ExportGlobalContext();
  const onClose = () => setReset(false);
  const [isRolls, setRolls] = useState<boolean>(false);

  return (<>
    <section className='box-border'>
      <aside className='box-board'>
        <div className='interaction-board'>
              <ButtonComponents 
               isClass='btn roll'
               isDisabled={isActiveMatch}
               isText={{cond: false, text: ""}}
               isIcons='fa-solid fa-dice'
               isFunctions={RollDiceMatch}
               setRolls={setRolls}
              />
              
              <ButtonComponents 
               isClass='btn reset'
               isOpen={setReset}
               isText={{cond: false, text:""}}
               isIcons='fa-solid fa-arrow-rotate-left'
              />
          </div>
          <div className='board-dice flex-dice'>
              
              <span className='con-dice player flex-cols'>
                <div className='int-dice'>
                  <Dice DiceRef={(dice) => (MatchRef.current.player = dice)} isCondition={isRolls} setCondition={setRolls}/>
                </div>
              </span>
                
              <span className='con-dice bot flex-cols'>
                 <div className='int-dice'>
                   <Dice DiceRef={(dice) => (MatchRef.current.com = dice)} isCondition={isRolls} setCondition={setRolls}/>
                 </div>
              </span>

          </div>
          <div className='board-dice-total'>
            <div className='dice-form'></div>
            <div className='dice-form'></div>
          </div>
      </aside>
    </section>

      <PopUpAdv
          isText='Le Risorse sono già vuote.'
          isAdv={isAdv}
          setAdv={setAdv}
        />
    
    <ModalAdv 
      isOpen={isReset}
      isMessage='Sicuro di Voler Resettare la Partita in Corso.'
      isTitle='Avvertimento'
      onClose={onClose}
      isOption={ResetMatchMode}
      />
  </>)
}
