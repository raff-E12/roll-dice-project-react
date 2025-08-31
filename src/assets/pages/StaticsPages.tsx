import React, { useEffect, useState } from 'react'
import "./css/StaticsStylePage.css"
import { ExportGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router';
import Footer from '../components/Footer';

type TargetStatus = "ClassicMode" | "MatchMode";

export default function StaticsPages() {
  const [isTarget, setTagert] = useState<TargetStatus>("ClassicMode");
  const { isScores, isScoresMatch, isPoints, isStatics } = ExportGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
   const PointsLocal = sessionStorage.getItem("Scores");
   const StaticsLocal = sessionStorage.getItem("Statics");

    if (PointsLocal !== null) {
      isScores.current = JSON.parse(PointsLocal);
    } else {
      isScores.current = [];
    }

   if (StaticsLocal !== null) {
      isStatics.current = JSON.parse(StaticsLocal);
    } else {
      isStatics.current = [];
    }

  },[])

  console.log(isScores.current, isStatics.current)

  return (<>
   <section className='container-full staics-page flex-center'>
      <div className='container-md statics-container'>

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
                    <button className='btn classic' onClick={() => setTagert("ClassicMode")}><i className="fa-solid fa-dice-d6"></i></button>
                    <button className='btn match' onClick={() => setTagert("MatchMode")}><i className="fa-solid fa-web-awesome"></i></button>
                    <button className='btn status'><i className="fa-solid fa-list-ul"></i></button>
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
                    {isScores.current.map((element) => {
                       return(
                     <div className='col-stat'>
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

                        const conditionBonus = element.bonus?.poker !== 0 || 
                        element.bonus?.triple !== 0 || element.bonus?.fullrun !== 0 
                        || element.bonus?.couple !== 0;

                        return(
                        <div className='col-stat'>
                              <div className='row-icon'>
                                 <p>{element.id}</p>
                              </div>
                           
                           <div className='row-text'>
                              <ul>
                                 <li className='st-full flex-center'>{element.player}</li>
                                 <li className='st-full flex-center'>{element.com}</li>
                                 <li className='st-full flex-center'><i className={`fa-solid fa-${element.points?.win === "Player" ? "user" : "robot"}`}></i></li>
                              </ul>
                           </div>

                           <div className={`enblem-bonus ${conditionBonus ? "" : "hidden"}`}>
                              <p><i className="fa-solid fa-award"></i></p>
                           </div>

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
                    <button className='btn home' onClick={() => navigate("/classic")}><i className="fa-solid fa-house"></i></button>
                </div>
            </span>
         </div>
      </div>
   </section>
  </>)
}
