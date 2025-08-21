import React from 'react'
import SideBar from '../components/SideBar'
import BoardGame from '../components/BoardGame'
import TextBoard from '../components/TextBoard'
import RollHistory from '../components/RollHistory'
import ResultBoard from '../components/ResultBoard'
import Footer from '../components/Footer'
import { ExportGlobalContext } from '../context/GlobalContext'

export default function GamePage() {
  const { isTotal, isScores, isActive, isFirst, isSecond } = ExportGlobalContext();

  return (<>
  <div className='container-md debug-box p-3 flex-col'>
    <div className='w-full flex-col flex gap-3 2xl:flex-row xl:flex-row lg:flex-row'>
      <div className='w-full flex-col flex gap-3'>
          <TextBoard isActive={isActive}/>
          <BoardGame />
      </div>
      <RollHistory isScores={isScores.current}/>
    </div>
    <ResultBoard isTotal={isTotal} isFirst={isFirst} isSecond={isSecond}/>
  </div>
  </>)
}
