import React from 'react'
import "./css/SettingsModals.css"
import SlidersComponents from '../components/extra/SlidersComponents';

type TypesProps = { isSettings: boolean, setSettings: (value: boolean) => void };



export default function SettingsModals({isSettings, setSettings}: TypesProps) {
  return (<>
  {isSettings && <div className='container-float flex-box'>
    <div className='container-md debug-box flex-box'>
        <div className='settings-modals'>

          <div className='set-int'>

           <div className='set-banner-title'>
              <h4>Impostazioni</h4>
           </div>

           <div className='set-menu debug-box'>
             
             <div className='col-menu debug-box'>
                <span className='menu-text debug-box'>
                   <h4>Musica</h4>
                </span>

                <span className='menu-sec debug-box'>
                  <SlidersComponents />
                </span>
             </div>

           </div>

          </div>

        </div>
    </div>
  </div> }
  </>)
}
