import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import LoadingPage from '../components/extra/LoadingPage'
import DiceLoadingSequence from '../components/extra/DiceLoadingSequence.tsx'
import SettingsModals from '../pages/SettingsModals.tsx'
import { ExportGlobalContext } from '../context/GlobalContext.tsx'
import BonusAlert from '../components/BonusAlert.tsx'

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
  const [isStop, setStop] = useState(false);
  const [isSettings, setSettings] = useState(false);
  const { isPoints, isActiveMatch, isReset, isBonus, isID } = ExportGlobalContext();
  
    useEffect(() => {
     requestAnimationFrame(() => setLoading(false));
    },[])

    useEffect(() => {
      setTimeout(() => setStop(true), 6400);
    }, [isStop])
  
    if (isLoading) {
      return <LoadingPage />
    }

  return (<>
    <Suspense fallback={<LoadingPage />}>
      <SideBar />
      <main className='main-sc'>
          <div className={`container-xl flex-box min-h-dvh ${!isStop ? "hidden" : ""}`}>
            <Outlet />
          </div>
          <div className={`loading-ls ${isStop ? "hidden" : ""}`}>
                <h4>Loading...</h4>
               <DiceLoadingSequence />
           </div>
      <Footer />
      </main>
      { isBonus.current !== null && <BonusAlert isReset={isReset} isActive={isActiveMatch} isBonus={isBonus.current} />}
      {/* <SettingsModals isSettings={isSettings} setSettings={setSettings} /> */}
    </Suspense>
  </>)
}
