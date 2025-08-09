import React from 'react'
import Dice from '../components/Dice'
import MainLogo from "../../../public/img/logo_2.png"
import Modals from '../components/Modals'

export default function MaingPage() {
  return (<>
   <main className='main-sc'>

     <nav className='navbar-sc'>
        <div className='logo-sc'>
          <img src={MainLogo} alt="logo-sc" />
        </div>

        <div className='dropmenu-sc'>

           <div className='icon-drop-menu'>
            <i className='material-symbols-outlined'>menu</i>
           </div>

            <ul className='drop-menu'>
                <li>Statitiche</li>
                <li>Info</li>
                <li>Temi</li>
            </ul>
        </div>
     </nav>

   </main>
  </>)
}
