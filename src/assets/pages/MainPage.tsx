import React from 'react'
import Dice from '../components/Dice'
import MainLogo from "../../../public/img/logo_2.png"
import Modals from '../components/Modals'

export default function MaingPage() {
  return (<>
   <main className='main-sc'>

      <div className='logo-sc'>
        <img src={MainLogo} alt="logo-sc" />
      </div>

     <Modals />
   </main>
  </>)
}
