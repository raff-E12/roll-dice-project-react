import React, { lazy, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import BoardGame from '../components/BoardGame'
import TextBoard from '../components/TextBoard'
import RollHistory from '../components/RollHistory'
import ResultBoard from '../components/ResultBoard'
import Footer from '../components/Footer'
import { ExportGlobalContext } from '../context/GlobalContext'

export default function GameClassic() {
  const { isTotal, isScores, isFirst, isSecond, isActive } = ExportGlobalContext();

  return (<>
  <div className='container-md p-3 flex-col'>
    <div className='w-full flex-col flex gap-3 2xl:flex-row xl:flex-row lg:flex-row'>
      <div className='w-full flex-col flex gap-3'>
          <TextBoard isActive={isActive}/>
          <BoardGame />
      </div>
      <RollHistory isScores={isScores.current} isMatch={[]}/>
    </div>
    <ResultBoard isTotal={isTotal} isFirst={isFirst} isSecond={isSecond}/>
  </div>
  </>)
}
