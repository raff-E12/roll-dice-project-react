import React, { useEffect } from 'react'
import TextBoard from '../components/TextBoard'
import BoardGame from '../components/BoardGame'
import RollHistory from '../components/RollHistory'
import ResultBoard from '../components/ResultBoard'
import COMBoardGame from '../components/COMBoardGame'
import { ExportGlobalContext } from '../context/GlobalContext'

export default function COMGamePage() {
  const { isScoresMatch, isWin, isPlayer, isCOM, isActiveMatch } = ExportGlobalContext();

  return (<>
   <div className='container-md p-3 flex-col'>
      <div className='w-full flex-col flex gap-3 2xl:flex-row xl:flex-row lg:flex-row'>
        <div className='w-full flex-col flex gap-3'>
            <TextBoard isActive={isActiveMatch}/>
            <COMBoardGame />
        </div>
        <RollHistory isMatch={isScoresMatch.current} isScores={[]}/>
      </div>
      <ResultBoard Win={isWin} PointPlayer={isPlayer} PointCOM={isCOM}/>
    </div>
  </>)
}
