import React, { useEffect } from 'react'
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
          <TextBoard isActive={false}/>
          <BoardGame />
      </div>
      <RollHistory isScores={[]} isMatch={[]}/>
    </div>
    <ResultBoard isTotal={0} isFirst={0} isSecond={0}/>
  </div>
  </>)
}
