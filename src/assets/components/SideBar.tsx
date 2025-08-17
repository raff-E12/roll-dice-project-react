import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import "./css/SideBarStyle.css"

export default function SideBar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isDrop, setDrop] = useState<boolean>(false);


  return (<>
  <section className={`container-side ${ isOpen ? "" : "close"}`} onMouseLeave={() => setOpen(false)}>

    <div className='icon-sidebar'>
        <span className='icon'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} distance="lg" hideOutline={false}/>
        </span>
    </div>

    <div className='slidebar-sc'>

        <div className='icon-brand'>
          <span className='icon-max'>
            <i className="fa-solid fa-dice"></i>
            </span>
        </div>

        <div className='drop-list'>

            <div className='sidebar-col' onMouseLeave={() => setDrop(false)}>
                <div className='front-col' onClick={() => setDrop(value => !value)}>
                   <div className='text-front'>
                      <i className="fa-solid fa-diamond"></i>
                      <h4>Modalità di Gioco</h4>
                   </div>
                </div>
                <ul className={`drop-menu ${ isDrop ? "open" : ""}`}>
                  <li>Classico</li>
                  <li>vs. COM</li>
                  <li>Tiro Libero</li>
                </ul>
            </div>

            <div className='sidebar-col'>
                <div className='front-col'>
                   <div className='text-front'>
                      <i className="fa-solid fa-diamond"></i>
                      <h4>Impostazioni</h4>
                   </div>
                </div>
            </div>

            <div className='sidebar-col'>
              <div className='front-col'>
                <div className='text-front'>
                    <i className="fa-solid fa-diamond"></i>
                    <h4>Informazioni</h4>
                </div>
              </div>
            </div>

            <div className='sidebar-col'>
                <div className='front-col'>
                  <div className='text-front'>
                      <i className="fa-solid fa-diamond"></i>
                      <h4>Personalizza</h4>
                  </div>
                </div>
            </div>
        </div>

    </div>
  </section>
  </>)
}
