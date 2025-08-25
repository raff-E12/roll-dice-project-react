import React, { useState } from 'react'
import LogoPage from "./../../../public/img/logo_3.png"
import BackFig from "../../../public/img/back_logo.png"

export default function Modals() {
  const [isOpen, setOpen] = useState<boolean>(true);

  return (<>
    <section className={`modal-sc ${!isOpen && "hidden"}`}>

        <div className='modals'>

            <div id='logo-modal'>
                <img src={LogoPage} alt="logo" />
                <img src={BackFig} alt="fig"/>
            </div>
            
            <div className='container-modal font-lexend'>
                <h3 className='text-2xl font-extrabold'>Benvenuto Nei Gioco Dei Dadi</h3>
                <p className='font-medium text-sm'>Preparati a sfidare la sorte! Qui il dado è il vero protagonista: basta un clic per 
                    lanciarlo e scoprire se la fortuna è dalla tua parte.
                    Che tu voglia giocare per divertimento, sfidare un amico o scalare la classifica, 
                    ogni lancio è un’occasione per vincere e migliorare le tue statistiche.
                    Le regole sono semplici: scegli, lancia, e guarda il dado rotolare.
                    ⚡ Consiglio del giorno: la fortuna premia gli audaci… ma anche chi lancia spesso!
                    Pronto a iniziare? Premi Gioca e lascia che il destino faccia il suo corso.</p>
            </div>

            <button className='btn-modal font-montserrant' onClick={() => setOpen(false)}>Inizia</button>
        </div>

    </section>
  </>)
}
