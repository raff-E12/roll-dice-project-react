import React from 'react'
import "./css/BoardBoxStyle.css"

export default function RollHistory() {
  return (
    <div className='box-border'>
        <aside className='board-imp flex gap-3 flex-col'>
            <div className='text-roll-front'>
                <h3>Lanci Effetuati</h3>
            </div>
            <ul className='list-rolls'>
                <li className='roll-index flex-index'>
                    <div className='icon-dice'>1</div>
                    <h4 className='text-1xl font-bold text-white'>0-0</h4>
                </li>
                <li className='roll-index flex-index'>
                    <div className='icon-dice'>1</div>
                    <h4 className='text-1xl font-bold text-white'>0-0</h4>
                </li>
                <li className='roll-index flex-index'>
                    <div className='icon-dice'>1</div>
                    <h4 className='text-1xl font-bold text-white'>0-0</h4>
                </li>
                 <li className='roll-index flex-index'>
                    <div className='icon-dice'>1</div>
                    <h4 className='text-1xl font-bold text-white'>0-0</h4>
                </li>
                 <li className='roll-index flex-index'>
                    <div className='icon-dice'>1</div>
                    <h4 className='text-1xl font-bold text-white'>0-0</h4>
                </li>
            </ul>
        </aside>
    </div>
  )
}
