import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import GamePage from './assets/pages/GamePage'
import SideBar from './assets/components/SideBar'
import Footer from './assets/components/Footer'
import { GlobalContext } from './assets/context/GlobalContext'
import StartBanner from './assets/components/StartBanner'

function App() {

  return (
    <>
    <SideBar />
    <GlobalContext>
      <main className='main-sc'>
            <div className='container-xl flex-box min-h-lvh'>
            <Routes>
              <Route index element={<GamePage />}/>
            </Routes>
          </div>
        <Footer />
        <StartBanner />
      </main>
    </GlobalContext>
    </>
  )
}

export default App
