import React from 'react'
import Dice from '../components/Dice'
import MainLogo from "../../../public/img/logo_2.png"
import Modals from '../components/Modals'
import "../css/Dice&Style.css"

export default function MaingPage() {
  return (<>
   <div className='main-sc'>

     <nav className='navbar-sc'>
        <div className='logo-sc'>
          <img src={MainLogo} alt="logo-sc" />
        </div>

        <div className='dropmenu-sc'>

           <div className='icon-drop-menu'>
            <i className='material-symbols-outlined'>menu</i>
           </div>

            <ul className='drop-menu hidden'>
                <li>Statitiche</li>
                <li>Info</li>
                <li>Temi</li>
            </ul>
        </div>
     </nav>


     <main className='menu-sc'>

      <div className='text-msg'>
        <h4 className='font-montserrant'>Draw!!</h4>
      </div>

         <div className='score-sc'>
           <div className='score-tab'>
            <i className="bi bi-person"></i>
              <h4>Giocatore</h4>
              <p><b>Score:</b> 0</p>
          </div>

          <div className='score-tab'>
            <i className="bi bi-robot"></i>
              <h4>COM</h4>
              <p><b>Score:</b> 0</p>
           </div>
         </div>

        <section className='dice-sc'>

            <div className='col-dice-sc'>
                  <h3 className='text-2xl font-bold'>Dado Giocatore</h3>
                  <div className="dice">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                </div>
            </div>


            <div className='col-dice-sc'>
                  <h3 className='text-2xl font-bold'>Dado COM</h3>
                  <div className="dice">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                </div>
            </div>
        </section>

        <div className='btn-dice'>
          <button className='btn font-bold'>Tira il Dado</button>
        </div>

        <div className='score-point-sc'>
          <ul>
            <li className='score-points'><b>Partita-1°:</b> <p>0-1</p></li>
            <li className='score-points'><b>Partita-2°:</b> <p>0-2</p></li>
            <li className='score-points'><b>Partita-3°:</b> <p>2-3</p></li>
            <li className='score-points'><b>Partita-4°:</b> <p>1-1</p></li>
          </ul>
        </div>

     </main>

   </div>
  </>)
}
