import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import GamePage from './assets/pages/GamePage'

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
