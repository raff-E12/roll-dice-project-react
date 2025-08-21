import React from 'react'
import "./css/BoardBoxStyle.css"

interface PropsTypes { isTotal: number, isFirst: number, isSecond: number };

export default function ResultBoard({isTotal, isFirst, isSecond}: PropsTypes) {
  return (<>
   <section className='box-border mt-2'>
      <aside className='text-board board-rs'>
        <h2 className='2xl:text-3xl xl:text-3xl lg:text-2xl md:text-lg'>{`PrimoDado: ${isFirst} SecondoDado: ${isSecond} Risultato: ${isTotal}`}</h2>
      </aside>
    </section>
  </>)
}
