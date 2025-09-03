import React, { lazy, Suspense, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { GlobalContext } from '../context/GlobalContext'
import LoadingPage from '../components/extra/LoadingPage'

  /* Caricamento Lazy Mode */
  const GamePageClassic = lazy(() => import("../pages/GameClassic.tsx"));
  const GamePageMatch = lazy(() => import("../pages/COMGamePage.tsx"));
  const BoardClassic = lazy(() => import("../components/BoardGame.tsx"));
  const BoardMatch = lazy(() => import("../components/COMBoardGame.tsx"));
  const ResultsBoard = lazy(() => import("../components/ResultBoard.tsx"));
  const RollsHistory = lazy(() => import("../components/RollHistory.tsx"));
  const Dice = lazy(() => import("../components/Dice.tsx"));
  const FooterSc= lazy(() => import("../components/Footer.tsx"));
  const SideBarSc = lazy(() => import("../components/SideBar.tsx"));
  const TextBoardSc = lazy(() => import("../components/TextBoard.tsx"));

export default function GameLayout() {
  const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
     let interval = setTimeout(() => setLoading(false), 1300);
     return () => clearTimeout(interval)
    },[])
  
    if (isLoading) {
      return <LoadingPage />
    }

  return (<>

    <Suspense fallback={<LoadingPage />}>
      <SideBar />
      <main className='main-sc'>
          <div className='container-xl flex-box min-h-dvh'>
            <Outlet />
          </div>
      <Footer />
      </main>
    </Suspense>
  </>)
}
