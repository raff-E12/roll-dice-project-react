import React from 'react'
import "../css/GraphicComponents.css"

type PropsType = { isOpen: boolean, setOpen: (value: boolean) => void }

export default function StatisticsWindow({isOpen, setOpen}: PropsType) {

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

          <div className='grid grid-cols-3 grid-rows-3 mt-2'>

            <div className='cols-compoonents-st col-span-1'>
              <p className='font-extrabold text-lg'>Partite Vinte</p>
              <div className="kpi-card highlight">
                <h3>0</h3>
                <p>Totale Vittorie</p>
              </div>
            </div>

            <div className='cols-compoonents-st col-span-2'>
              <p className='font-extrabold text-lg'>Partite Perse</p>
              <div className="kpi-card highlight">
                <h3>0</h3>
                <p>Totale Sconfitte</p>
              </div>
            </div>

          </div>
       </div>
    </div>

  </section>
  </>)
}
