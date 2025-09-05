import React, { useState } from 'react'
import "./css/StartPageStyle.css"
import StartBanner from '../components/StartBanner'
import { NavLink } from 'react-router';

export default function GameStartPage() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onClose = () => setOpen(false);

  return (<>
    <section className='start-screen flex-center-col'>
       <div className='start-top'>
        <button className='btn-volume'><i className="fa-solid fa-gear"></i></button>
       </div>

        <div className='screen-section flex-center-col'>
            <span className='logo-screen'></span>
            <span className='option-sc container-small'>
                <NavLink className={"btn start"} to={"/classic"}>Gioca</NavLink>
                <button className='btn info' onClick={() => setOpen(true)}>Info</button>
            </span>
        </div>

        <div id='dice-bg-1'></div>
        <div id='dice-bg-2'></div>

        <div className='text-bottom'>
          <p>Progetto Realizzato da me.</p>
        </div>
    </section>
    <StartBanner isOpen={isOpen} onClose={onClose}/>
  </>
  )
}
