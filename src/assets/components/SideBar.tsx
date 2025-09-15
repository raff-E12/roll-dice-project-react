import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import "./css/SideBarStyle.css"
import { NavLink, useNavigate } from 'react-router';

type PropTypes = { setSettings: (value: boolean) => void };

export default function SideBar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isDrop, setDrop] = useState<boolean>(false);
  const navigate = useNavigate();

  return (<>
  <section className={`container-side ${ isOpen ? "" : "close"}`}>

    <div className='icon-sidebar'>
        <span className='icon'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} distance="lg" hideOutline={false}/>
        </span>
    </div>

    <div className='slidebar-sc' onMouseLeave={() => setOpen(false)}>

        <div className='icon-brand'>
          <span className='icon-max'>
            <i className="fa-solid fa-dice"></i>
            </span>
        </div>

        <div className='drop-list'>

            <div className='sidebar-col' onMouseLeave={() => setDrop(false)}>
                <div className='front-col' onClick={() => setDrop(value => !value)}>
                   <div className='text-front'>
                      <i className="fa-solid fa-trophy"></i>
                      <h4>Modalità di Gioco</h4>
                   </div>
                </div>
                <ul className={`drop-menu ${ isDrop ? "open" : ""}`}>
                  <li onClick={() => navigate("/classic")}><p>Classico</p></li>
                  <li onClick={() => navigate("/vs-com")}><p>vs. COM</p></li>
                </ul>
            </div>
{/* 
            <div className='sidebar-col'>
                <div className='front-col' onClick={() => setSettings(true)}>
                   <div className='text-front'>
                      <i className="fa-solid fa-diamond"></i>
                      <h4>Impostazioni</h4>
                   </div>
                </div>
            </div> */}

            <div className='sidebar-col'>
             <NavLink className={"front-col"} to={"/statics-game"}>
                <div className='text-front'>
                    <i className="fa-solid fa-ranking-star"></i>
                    <h4>Statistiche</h4>
                </div>
             </NavLink>
            </div>

            {/* <div className='sidebar-col'>
                <div className='front-col'>
                  <div className='text-front'>
                      <i className="fa-solid fa-diamond"></i>
                      <h4>Personalizza</h4>
                  </div>
                </div>
            </div> */}

        </div>

    </div>
  </section>
  </>)
}
