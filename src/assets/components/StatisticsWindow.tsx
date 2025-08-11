import React from 'react'
import "../css/GraphicComponents.css"

type PropsType = { isOpen: boolean, setOpen: (value: boolean) => void, isStatus: { win: number, lose: number, draw: number } }

export default function StatisticsWindow({isOpen, setOpen, isStatus}: PropsType) {

  return (<>
  <section className={`statistics-sc ${!isOpen && "hidden"}`}>
    
    <div className='statics-window'>

       <div className='w-full flex justify-end'>
        <button className='close-btn-st' onClick={() => setOpen(false)}><i className="bi bi-x"></i></button>
       </div>

       <div className='statics-structured'>
          <div className='text-top'>
            <h3>Statistiche</h3>
          </div>

          <div className='grid grid-cols-2 grid-rows-2 mt-2'>

            <div className='col-span-2 row-span-2 flex items-center justify-center'>
              <div className='cols-compoonents-st grow-2'>
                <p className='font-extrabold text-lg'>Partite Vinte</p>
                <div className="kpi-card highlight">
                  <h3>{isStatus.win}</h3>
                  <p>Totale Vittorie</p>
                </div>
              </div>

              <div className='cols-compoonents-st'>
                <p className='font-extrabold text-lg'>Partite Perse</p>
                <div className="kpi-card highlight">
                  <h3>{isStatus.lose}</h3>
                  <p>Totale Sconfitte</p>
                </div>
              </div>

              <div className='cols-compoonents-st'>
                <p className='font-extrabold text-lg'>Parità</p>
                <div className="kpi-card highlight">
                  <h3>{isStatus.draw}</h3>
                  <p>Totale Parità</p>
                </div>
              </div>
            </div>

            <div className='col-span-2'>
                <div className="statistics">
                  <div className="stats-header">
                    <h4>Vittorie</h4>
                    <span>Sconfitte</span>
                  </div>

                  <div className="stats-values">
                          <div>
                            <h5>$150.09</h5>
                            <p>Income</p>
                          </div>
                          <div>
                            <h5>$90.23</h5>
                            <p>Spend</p>
                          </div>
                        </div>

                    <div className="bar-chart">
                        <div className="bar" style={{height:"70%"}}></div>
                        <div className="bar" style={{height:"50%"}}></div>
                        <div className="bar" style={{height: "20%"}}></div>
                        <div className="bar" style={{height:"30%"}}></div>
                        <div className="bar" style={{height:"30%"}}></div>
                        <div className="bar" style={{height:"30%"}}></div>
                      </div>
                </div>
            </div>

          </div>
       </div>
    </div>

  </section>
  </>)
}
