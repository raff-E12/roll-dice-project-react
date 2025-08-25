import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import SideBar from './assets/components/SideBar'
import Footer from './assets/components/Footer'
import { GlobalContext } from './assets/context/GlobalContext'
import StartBanner from './assets/components/StartBanner'
import COMGamePage from './assets/pages/COMGamePage'
import GameClassic from './assets/pages/GameClassic'
import GameStartPage from './assets/pages/GameStartPage'
import GameLayout from './assets/layout/GameLayout'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<GameStartPage />} />

      <Route element={<GameLayout />}>
        <Route path='/classic' element={<GameClassic/>}/>
        <Route path='/vs-com' element={<COMGamePage/>}/>
      </Route>

    </Routes>
    </>
  )
}

export default App
