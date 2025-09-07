import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./css/StaticsStylePage.css"
import { ExportGlobalContext } from '../context/GlobalContext';
import WindowResume from '../components/extra/WindowResume';
import DiceLoadingSequence from '../components/extra/DiceLoadingSequence';
import ButtonComponents from '../components/extra/ButtonComponents';
import StaticsSoundGame from "../../../public/sound/status_music.mp3"

export default function StaticsPages() {
  const [isTarget, setTagert] = useState<string>("ClassicMode");
  const { isScores, isScoresMatch, isPoints, isStatics, isBonus } = ExportGlobalContext();

  const [isClose, setClose] = useState<boolean>(false);
  const [isStop, setStop] = useState<boolean>(false);
  const [isPlay, setPlay] = useState<boolean>(false);
  const AudioRef = useRef<HTMLAudioElement>(null);

   useEffect(() => {
      const interval = setTimeout(() => setStop(true), 1660);
      return () => clearTimeout(interval);
   }, [isStop])

   const PlayMusicBackground = useMemo(() => {
      if(isPlay){
         AudioRef.current?.play();
         AudioRef.current!.volume = 0.8;
      } else {
         AudioRef.current?.pause();
      }
   },[isPlay]);

  return (<>
   <section className='container-full staics-page flex-center'>
      <div className={`container-md statics-container ${!isStop ? "hidden" : ""}`}>

         <div className='st-responsive md flex-center'>
            <div className='statics-gradient p-3'>
               <div className='text-section'>
                  <div className='logo-st'></div>
               </div>
            </div>
         </div>

         <div className='statics-gradient st-responsive'>
            <div className='st-full p-3'>
               <span className='st-full st-flex-col inset-st'>

                 <div className='btn-switch st-full'>

                    <ButtonComponents 
                     isClass='btn classic'
                     isTarget={{ cond: true, target: "ClassicMode" }}
                     isText={{ cond: false, text: "" }}
                     isIcons='fa-solid fa-dice-d6'
                     setTarget={setTagert}
                    />

                     <ButtonComponents 
                     isClass='btn match'
                     isTarget={{ cond: true, target: "MatchMode" }}
                     isText={{ cond: false, text: "" }}
                     isIcons='fa-solid fa-web-awesome'
                     setTarget={setTagert}
                    />

                      <ButtonComponents 
                     isClass='btn status'
                     isOpen={setClose}
                     isText={{ cond: false, text: "" }}
                     isIcons='fa-solid fa-flag'
                     setTarget={setTagert}
                    />
                    
                 </div>

                {isTarget === "ClassicMode" &&  <div className='list-sc'>

                   <div className='list-index'>
                     <div className='st-full flex-center'>
                        <ul>
                           <li className='flex-center'>Lancio</li>
                           <li className='flex-center'>
                              <ul className='rows-mod'>
                                 <li className='flex-center st-full'>D1</li>
                                 <li className='flex-center st-full'>D2</li>
                                 <li className='flex-center st-full'>Tot</li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                  </div>
                   
                   <div className='list-grid'>
                    {isScores.current.map((element, index) => {
                       return(
                     <div className='col-stat' key={index}>
                           <div className='row-icon'>
                              <p>{element.id}</p>
                           </div>
                        
                        <div className='row-text'>
                           <ul>
                              <li className='flex-center st-full'>{element.first}</li>
                              <li className='flex-center st-full'>{element.second}</li>
                              <li className='flex-center st-full'>{element.total}</li>
                           </ul>
                        </div>

                     </div>
                       )
                    })}

                    {isScores.current.length === 0 && <div className='row-empty'><p>La Lista è Vuoto</p></div>}
                   </div>
                   
                 </div>}

                 { isTarget === "MatchMode" &&  <div className='list-sc'>

                  <div className='list-index'>
                     <div className='st-full flex-center'>
                        <ul>
                           <li className='flex-center'>Lancio</li>
                           <li className='flex-center'>
                              <ul className='rows-mod'>
                                 <li className='flex-center w-full'>Player</li>
                                 <li className='flex-center w-full'>COM</li>
                                 <li className='flex-center w-full'>Win</li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                  </div>
                   
                  <div className='list-grid'>
                     
                     {isStatics.current.map((element) => {

                        const conditionWins = element.points?.win !== "COM" ?  "user" : "robot";

                        return(
                        <div className='col-stat' key={element.id}>
                              <div className='row-icon'>
                                 <p>{element.id}</p>
                              </div>
                           
                           <div className='row-text'>
                              <ul>
                                 <li className='st-full flex-center'>{element.player}</li>
                                 <li className='st-full flex-center'>{element.com}</li>
                                 <li className='st-full flex-center'><i className={`fa-solid fa-${conditionWins}`}></i></li>
                              </ul>
                           </div>

                           {isBonus.current.map((bonus) => {
                              if (bonus.id === element.id) {

                                 const conditionBonus = bonus.bonus.poker !== 0 || 
                                 bonus.bonus.triple !== 0 || bonus.bonus.fullrun !== 0 
                                 || bonus.bonus.couple !== 0;

                                 return(<div  className={`enblem-bonus ${conditionBonus ? "" : "hidden"}`} key={bonus.id}>
                                    <p><i className='fa-solid fa-award'></i></p>
                                 </div>)
                              }
                           })}

                        </div>
                        )
                     })}

                     {isStatics.current.length === 0 && <div className='row-empty'><p>La Lista è Vuoto</p></div>}
                  </div>

                 </div>}

               </span>
            </div>

         </div>

         <div className='statics-gradient p-3'>
            <span className='st-full st-box-in inset-st'>
                <div className='btn-sections'>

                    <ButtonComponents 
                     isClass='btn home'
                     isText={{ cond: false, text: "" }}
                     isNavigate={{ cond: true, to: "/classic" }}
                     isIcons='fa-solid fa-house'
                    />

                   <ButtonComponents 
                     isClass='btn imp'
                     isText={{ cond: false, text: "" }}
                     setPlay={setPlay}
                     isPlay={isPlay}
                     isIcons={isPlay ? " fa-solid fa-volume-high" : "fa-solid fa-volume-xmark"}
                    />
                    
                </div>
            </span>
         </div>
      </div>

      <div id='dice-bg-1'></div>
      <div id='dice-bg-2'></div>
      
   <WindowResume 
   StatusScheme={ { 
   Points: isPoints.current, 
   ScoresMatch: isScoresMatch.current, 
   Scores: isScores.current, 
   Statics: isStatics.current 
   } }
   isClose={isClose}
   setClose={setClose}
   />

   <audio className='absolute top-2 right-2 hidden' controls ref={AudioRef} loop>
      <source src={StaticsSoundGame} type='audio/mpeg' />
   </audio>

   <div className={`loading-ls ${isStop ? "hidden" : ""}`}>
      <h4>Loading...</h4>
      <DiceLoadingSequence />
   </div>
   </section>
  </>)
}
