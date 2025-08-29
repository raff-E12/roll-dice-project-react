import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react'
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
import LoadingPage from './assets/components/extra/LoadingPage'

  const GamePageClassic = lazy(() => import("./assets/pages/GameStartPage.tsx"));
  const GamePageMatch = lazy(() => import("./assets/pages/COMGamePage.tsx"));

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
   let interval = setTimeout(() => setLoading(false), 6300);
   return () => clearTimeout(interval)
  },[])

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <>
    <Suspense fallback={isLoading}>
      <Routes>
        <Route index element={<GameStartPage />} />

        <Route element={<GameLayout />}>
          <Route path='/classic' element={<GameClassic/>}/>
          <Route path='/vs-com' element={<COMGamePage/>}/>
        </Route>

      </Routes>
    </Suspense>
      
    </>
  )
}

export default App
