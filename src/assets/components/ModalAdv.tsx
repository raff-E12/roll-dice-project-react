import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import "./css/ModalsAdv.css"

interface PropsTypes {
  isOpen: boolean,
  onClose: () => void,
  isMessage: string,
  isOption: () => void,
  isTitle: string
}

export default function ModalAdv({ isOpen, onClose, isMessage, isOption, isTitle}: PropsTypes) {
  return (<>
  <Popup open={isOpen} closeOnDocumentClick  onClose={onClose}>
     <div className='popup-layout' id='modal'>
       <div className='popup-title'>
          <h2 className='font-bold'>{isTitle}</h2>
          <button className='close-btn' onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
       </div>
       <div className='popup-content'>
         <p>{isMessage}</p>
       </div>
       <div className='popup-btns'>
         <button className='btn confirm' onClick={() => isOption()}>Confirm</button>
         <button className='btn return' onClick={onClose}>Return</button>
       </div>
     </div>
  </Popup>
  </>)
}
