import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import "../css/ModalsAdv.css"
import BackFig from "../../../../public/img/back_logo.png"
import LogoPage from "../../../../public/img/logo_3.png"

interface PropsTypes { isOpen: boolean, onClose: () => void };

export default function StartBanner({isOpen, onClose}: PropsTypes) {

  return (<>
  <Popup open={isOpen} closeOnDocumentClick  onClose={onClose}>
     <div className={`popup-layout ${isOpen ? "fade-in" : "fade-out"}`} id='popup-welcome'>
        <div id='logo-modal'>
            <img src={LogoPage} alt="logo" />
            <img src={BackFig} alt="fig"/>
        </div>
       <div className='flex w-full justify-center'>
          <h2 className='font-bold'>Benvenuto</h2>
       </div>
       <div className='popup-content'>
         <p className='capitalize'>Questo è un progetto frontend in Lavorazione spero che sia di vostro gradimento. :)</p>
       </div>
       <div className='popup-btns'>
         <button className='btn confirm' onClick={onClose}>Ritorna</button>
       </div>
     </div>
  </Popup>
  </>)
}
