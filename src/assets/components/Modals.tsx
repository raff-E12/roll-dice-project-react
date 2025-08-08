import React from 'react'
import LogoPage from "./../../../public/img/logo_3.png"
import BackFig from "../../../public/img/back_logo.png"

export default function Modals() {
  return (<>
    <section className='modal-sc'>

        <div className='modals'>
            <div id='logo-modal'>
                <img src={LogoPage} alt="logo" />
                <img src={BackFig} alt="fig"/>
            </div>
            <h3>Benvenuto</h3>
        </div>

    </section>
  </>)
}
