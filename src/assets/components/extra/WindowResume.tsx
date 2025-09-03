import React, { useState } from 'react'
import "../css/WindowResumeStyle.css"
import type { MatchScoresType, PointsTypes, TypesScores } from '../../types/ComponentsExportsTypes'

type PropTypes = { StatusScheme: { Scores: TypesScores[], ScoresMatch: MatchScoresType[], Points: PointsTypes, Statics: PointsTypes[] },
                   isClose: boolean, setClose: (value: boolean) => void}

export default function WindowResume({StatusScheme, setClose, isClose}: PropTypes) {
   const { Scores, ScoresMatch, Points, Statics } = StatusScheme;
   const LostPoints = Points.player - Points.com;

  function ParamaterImplement() {
   let MatchNumberMax = 0;
   let NumberLoopMatch: any = null;
   let NumberCurrentLoop = 0;

   if (ScoresMatch.length !== 0 && Object.keys(Points).length !== 0) {
      
   MatchNumberMax = ScoresMatch.reduce((accumulator, currentElement) => { return Math.max(accumulator, currentElement.player) }, 0);
   NumberLoopMatch = ScoresMatch.map(element => element.player).reduce((acccumulator: Record<number, number> = {}, Currentnumber) => { 
      acccumulator[Currentnumber] = (acccumulator[Currentnumber] || 0) + 1;
      return acccumulator
    }, {});

    NumberCurrentLoop = Number(Object.keys(NumberLoopMatch).reduce((a, b) => NumberLoopMatch[Number(a)] > NumberLoopMatch[Number(b)] ? a : b));
   } else {
      MatchNumberMax = 0;
      NumberCurrentLoop = 0;
   }

   return { max: MatchNumberMax, loop: NumberCurrentLoop }
  }

  const NumbersExtra = ParamaterImplement();

  return (<>
   <section className={`window-container debug-box flex-box ${!isClose && "hidden"}`}>
      <div className='debug-box container-lg flex-center relative'>

         <div className='points-player-window'>
             <div className='window-cont'>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-medal"></i></span>
                   <span className='window-text'>
                     <h4>Vittorie</h4>
                     <p>{Points.player}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-robot"></i></span>
                   <span className='window-text'>
                     <h4>COM</h4>
                     <p>{Points.com}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-2"></i></span>
                   <span className='window-text'>
                     <h4>Doppie</h4>
                     <p>{Points.bonus?.couple}</p>
                   </span>
               </div>

               
               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-3"></i></span>
                   <span className='window-text'>
                     <h4>Triplo</h4>
                     <p>{Points.bonus?.triple}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-heart"></i></span>
                   <span className='window-text'>
                     <h4>Poker</h4>
                     <p>{Points.bonus?.poker}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-dragon"></i></span>
                   <span className='window-text'>
                     <h4>FullRun</h4>
                     <p>{Points.bonus?.fullrun}</p>
                   </span>
               </div>
               
               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-certificate"></i></span>
                   <span className='window-text'>
                     <h4>M. Totale</h4>
                     <p>{NumbersExtra.max}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-star-of-life"></i></span>
                   <span className='window-text'>
                     <h4>Numero R.</h4>
                     <p>{NumbersExtra.loop}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-face-sad-cry"></i></span>
                   <span className='window-text'>
                     <h4>Sconfitte</h4>
                     <p>{LostPoints}</p>
                   </span>
               </div>

               <div className='col-medium-rs'>
                  <span className='col-md'>Totale Lanci</span>
                  <span className='col-md'>0</span>
                  <span className='col-md'>Totale Bonus</span>
                  <span className='col-md'>0</span>
               </div>

             </div>

             
          <div className='left-selection'>
             <div className='cont-left'>
                <span className='sel-btn classic'>
                  <i className="fa-solid fa-cubes"></i>
                </span>

                <span className='sel-btn match'>
                    <i className="fa-solid fa-dice-d6"></i>
                </span>

                <span className='sel-btn exit' onClick={() => setClose(false)}>
                  <i className="fa-solid fa-xmark"></i>
                </span>
             </div>
          </div>

         </div>

      </div>
   </section>
  </>)
}