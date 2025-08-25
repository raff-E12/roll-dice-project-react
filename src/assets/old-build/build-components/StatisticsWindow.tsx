import React from 'react'
import "../css/GraphicComponents.css"

type StatusAllType = { wins:{ win: number, lose: number, draw: number }, combos: { couple: number, triple: number, poker: number, fullrun: number } };
type PropsType = { isOpen: boolean, setOpen: (value: boolean) => void, isStatus: StatusAllType }

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
                  <h3>{isStatus.wins.win}</h3>
                  <p>Totale Vittorie</p>
                </div>
              </div>

              <div className='cols-compoonents-st'>
                <p className='font-extrabold text-lg'>Partite Perse</p>
                <div className="kpi-card highlight">
                  <h3>{isStatus.wins.lose}</h3>
                  <p>Totale Sconfitte</p>
                </div>
              </div>

              <div className='cols-compoonents-st'>
                <p className='font-extrabold text-lg'>Parità</p>
                <div className="kpi-card highlight">
                  <h3>{isStatus.wins.draw}</h3>
                  <p>Totale Parità</p>
                </div>
              </div>
            </div>

          <div className='text-top m-2'>
            <h3>Bonus Coppie</h3>
          </div>

            <div className='col-span-2 row-span-2 flex items-center justify-center'>
              <div className='cols-compoonents-st grow-2'>
                <p className='font-extrabold text-lg'>Coppia</p>
                <div className="kpi-card highlight">
                  <h3>{isStatus.combos.couple}</h3>
                  <p>Totale in Tutto</p>
                </div>
              </div>

              <div className='cols-compoonents-st'>
                <p className='font-extrabold text-lg'>Tris</p>
                <div className="kpi-card highlight">
                  <h3>{isStatus.combos.triple}</h3>
                  <p>Totale in Tutto</p>
                </div>
              </div>
              </div>


              <div className='col-span-2 row-span-2 flex items-center justify-center'>
                  <div className='cols-compoonents-st grow-2'>
                    <p className='font-extrabold text-lg'>Poker</p>
                    <div className="kpi-card highlight">
                      <h3>{isStatus.combos.poker}</h3>
                      <p>Totale in Tutto</p>
                    </div>
                  </div>

                  <div className='cols-compoonents-st grow-2'>
                    <p className='font-extrabold text-lg'>FullRun</p>
                    <div className="kpi-card highlight">
                      <h3>{isStatus.combos.fullrun}</h3>
                      <p>Totale in Tutto</p>
                    </div>
                </div>
              </div>

            </div>
       </div>
    </div>

  </section>
  </>)
}
