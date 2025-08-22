import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import "./css/ModalsAdv.css"
import BackFig from "../../../public/img/back_logo.png"
import LogoPage from "../../../public/img/logo_3.png"

export default function StartBanner() {
  const [isOpen, setOpen] = useState(true);
  const onClose = () => setOpen(false);

  return (<>
  <Popup open={isOpen} closeOnDocumentClick  onClose={onClose}>
     <div className='popup-layout' id='popup-welcome'>
        <div id='logo-modal'>
            <img src={LogoPage} alt="logo" />
            <img src={BackFig} alt="fig"/>
        </div>
       <div className='flex w-full justify-center'>
          <h2 className='font-bold'>Benvenuto</h2>
       </div>
       <div className='popup-content'>
         <p>Preparati a sfidare la sorte! Qui il dado è il vero protagonista: basta un clic per 
            lanciarlo e scoprire se la fortuna è dalla tua parte.
            Che tu voglia giocare per divertimento, sfidare un amico o scalare la classifica, 
            ogni lancio è un’occasione per vincere e migliorare le tue statistiche.
            Le regole sono semplici: scegli, lancia, e guarda il dado rotolare.
            ⚡ Consiglio del giorno: la fortuna premia gli audaci… ma anche chi lancia spesso!
            Pronto a iniziare? Premi Gioca e lascia che il destino faccia il suo corso.</p>
       </div>
       <div className='popup-btns'>
         <button className='btn confirm' onClick={onClose}>skip</button>
       </div>
     </div>
  </Popup>
  </>)
}
