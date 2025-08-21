import React from 'react'
import "./css/BoardBoxStyle.css"
import type { TypesScores } from '../types/ComponentsExportsTypes'

interface PropsTypes { isScores: TypesScores[] };

export default function RollHistory({ isScores }: PropsTypes) {
  return (
    <div className='box-border'>
        <aside className='board-imp flex gap-3 flex-col'>
            <div className='text-roll-front'>
                <h3>Lanci Effetuati</h3>
            </div>
            <ul className='list-rolls'>
                {isScores.map((element, index) => {
                    return(
                    <li className='roll-index flex-index' key={index}>
                        <div className='icon-dice'>{element.id}</div>
                        <span className='flex w-[100px] justify-between items-center gap-1'>
                            <h4 className='text-1xl font-bold text-white'>Totale: {element.total}</h4>
                            <h4 className='text-1xl font-bold text-white'>{element.first}-{element.second}</h4>
                        </span>
                    </li>
                    )
                })}
            </ul>
        </aside>
    </div>
  )
}
