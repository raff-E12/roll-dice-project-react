import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import GamePage from './assets/pages/GamePage'
import MaingPage from './assets/pages/MainPage'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<GamePage />}/>
    </Routes>
    </>
  )
}

export default App
