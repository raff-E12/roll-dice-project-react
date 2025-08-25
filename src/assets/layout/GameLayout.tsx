import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { GlobalContext } from '../context/GlobalContext'

export default function GameLayout() {
  return (<>
  <SideBar />
    <main className='main-sc'>
      <GlobalContext>
        <div className='container-xl flex-box min-h-lvh'>
          <Outlet />
        </div>
      </GlobalContext>
    <Footer />
    </main>
  </>)
}
