import React from 'react'
import "./css/BoardBoxStyle.css"

interface PropsTypes { isTotal: number, isFirst: number, isSecond: number };

function ResultBoard({isTotal, isFirst, isSecond}: PropsTypes) {
  return (<>
   <section className='box-border mt-2'>
      <aside className='text-board board-rs'>
        <h2 className='text-res'>
          {`PrimoDado: ${isFirst} SecondoDado: ${isSecond} Risultato: ${isTotal}`}
        </h2>
      </aside>
    </section>
  </>)
}


export default React.memo(ResultBoard)