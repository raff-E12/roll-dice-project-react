import React, { useState } from 'react'
import "../css/WindowResumeStyle.css"
import type { MatchScoresType, PointsTypes, TypesScores } from '../../types/ComponentsExportsTypes'

type PropTypes = { StatusScheme: { Scores: TypesScores[], 
                                   ScoresMatch: MatchScoresType[], 
                                   Points: PointsTypes, 
                                   Statics: PointsTypes[] },
                                   isClose: boolean, 
                                   setClose: (value: boolean) => void}

export default function WindowResume({StatusScheme, setClose, isClose}: PropTypes) {
   const { Scores, ScoresMatch, Points, Statics } = StatusScheme;
   const LostPoints = Points.player - Points.com;
   const [isSwitch, setSwitch] = useState<string>("Classic");

  function ValuesExtraStatus() {
   let MatchNumberMax = 0;
   let NumberLoopMatch: number = 0;
   let NumberCurrentLoop = 0;
   let TotalBonus = 0;
   let TotalMatch = 0;
   let LastSumTotal = 0;
   let ThrowingDices = 0;
   const ListTotal = [...new Set(Scores.map(element => element.total))];
   const ScoresClassic = { first: Scores.map(element => element.first), second: Scores.map(element => element.second)};
   const ListNumberDice = ScoresMatch.map(element => element.player);
   const NumbersIndexClassic = { one: 0, two: 0, three: 0, four: 0, five: 0, six: 0 };
   let TotalMin = 0;
   let TotalMax = 0;
   let AverangeTotal = 0;

   if (ScoresMatch.length !== 0 && Object.keys(Points).length !== 0) {
      
   MatchNumberMax = ScoresMatch.reduce((accumulator, currentElement) => { return Math.max(accumulator, currentElement.player) }, 0);
   const NumberLoopList = ListNumberDice.reduce((acccumulator: Record<number, number> = {}, Currentnumber) => { 
      acccumulator[Currentnumber] = (acccumulator[Currentnumber] || 0) + 1;
      return acccumulator
    }, {});

    NumberLoopMatch = Number(Object.keys(NumberLoopList).reduce((a, b) => NumberLoopList[Number(a)] > NumberLoopList[Number(b)] ? a : b));
   } else {
      MatchNumberMax = 0;
      NumberCurrentLoop = 0;
   }

  if (Object.values(Points.bonus!).length !== 0) {
    TotalBonus = Points.bonus!.couple + Points.bonus!.fullrun + Points.bonus!.poker + Points.bonus!.triple;
    TotalMatch = ScoresMatch.length;
  }

  if (Scores.length !== 0) {
     LastSumTotal = ListTotal[ListTotal.length - 1];
     ThrowingDices = Scores.length;
     const NumbersLists = [...ScoresClassic.first, ...ScoresClassic.second];

     for (let key = 0; key < NumbersLists.length; key++) {

        switch (NumbersLists[key]) {
          case 1:
          NumbersIndexClassic.one++;
          break;

          case 2:
          NumbersIndexClassic.two++;
          break;

          case 3:
          NumbersIndexClassic.three++;
          break;

          case 4:
          NumbersIndexClassic.four++;
          break;

          case 5:
          NumbersIndexClassic.five++;
          break;

          case 6:
          NumbersIndexClassic.six++;
          break;
        }

     }

     TotalMax = Number(ListTotal.find(number => Math.max(number)));
     TotalMin = Number(ListTotal.find(number => Math.min(number)));
     AverangeTotal = Number(ListTotal.find(number => number / 2));
  }

   return { max: MatchNumberMax, 
            loop: NumberCurrentLoop, 
            totalbonus: TotalBonus, 
            totalmatch: TotalMatch, 
            last: LastSumTotal,
            throw: ThrowingDices,
            face: NumbersIndexClassic,
            maxtot: TotalMax,
            mintot: TotalMin,
            averange: AverangeTotal }
  }

  const NumbersExtra = ValuesExtraStatus();

  return (<>
   <section className={`window-container flex-box ${!isClose && "hidden"}`}>
      <div className='container-lg flex-center relative'>

         <div className='points-player-window'>
            
          { isSwitch === "Match" && <div className='window-cont'>

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
                  <span className='col-md'>{NumbersExtra.totalmatch}</span>
                  <span className='col-md'>Totale Bonus</span>
                  <span className='col-md'>{NumbersExtra.totalbonus}</span>
               </div>

             </div> }

            { isSwitch === "Classic" && <div className='window-cont'>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-plus"></i></span>
                   <span className='window-text'>
                     <h4>U. Frequente</h4>
                     <p>{NumbersExtra.last}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-dice-one"></i></span>
                   <span className='window-text'>
                     <h4>Uno</h4>
                     <p>{NumbersExtra.face.one}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-dice-two"></i></span>
                   <span className='window-text'>
                     <h4>Due</h4>
                     <p>{NumbersExtra.face.two}</p>
                   </span>
               </div>

               
               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-dice-three"></i></span>
                   <span className='window-text'>
                     <h4>Tre</h4>
                     <p>{NumbersExtra.face.three}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-dice-four"></i></span>
                   <span className='window-text'>
                     <h4>Quattro</h4>
                     <p>{NumbersExtra.face.four}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-dice-five"></i></span>
                   <span className='window-text'>
                     <h4>Cinque</h4>
                     <p>{NumbersExtra.face.five}</p>
                   </span>
               </div>
               
               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-dice-six"></i></span>
                   <span className='window-text'>
                     <h4>Sei</h4>
                     <p>{NumbersExtra.face.six}</p>
                   </span>
               </div>
               
               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-certificate"></i></span>
                   <span className='window-text'>
                     <h4>T. Minimo</h4>
                     <p>{NumbersExtra.mintot}</p>
                   </span>
               </div>

               <div className='col-window-sc'>
                   <span className='dice-icon'><i className="fa-solid fa-star-of-life"></i></span>
                   <span className='window-text'>
                     <h4>T. Massimo</h4>
                     <p>{NumbersExtra.maxtot}</p>
                   </span>
               </div>

               <div className='col-medium-rs'>
                  <span className='col-md'>Totale Lanci</span>
                  <span className='col-md'>{NumbersExtra.throw}</span>
                  <span className='col-md'>Media Totale</span>
                  <span className='col-md'>{NumbersExtra.averange}</span>
               </div>

             </div>}
             
          <div className='left-selection'>
             <div className='cont-left'>
                <span className='sel-btn classic' onClick={() => setSwitch("Classic")}>
                  <i className="fa-solid fa-cubes"></i>
                </span>

                <span className='sel-btn match' onClick={() => setSwitch("Match")}>
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