import React from 'react'
import TextBoard from '../components/TextBoard'
import BoardGame from '../components/BoardGame'
import RollHistory from '../components/RollHistory'
import ResultBoard from '../components/ResultBoard'
import COMBoardGame from '../components/COMBoardGame'

export default function COMGamePage() {
  return (<>
   <div className='container-md p-3 flex-col'>
      <div className='w-full flex-col flex gap-3 2xl:flex-row xl:flex-row lg:flex-row'>
        <div className='w-full flex-col flex gap-3'>
            <TextBoard isActive={false}/>
            <COMBoardGame />
        </div>
        <RollHistory isScores={[]}/>
      </div>
      <ResultBoard isFirst={0} isSecond={0} isTotal={0}/>
    </div>
  </>)
}
