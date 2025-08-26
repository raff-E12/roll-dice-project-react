import React, { useEffect, useMemo, useState } from 'react'
import "./css/BoardBoxStyle.css"
import type { MatchScoresType, TypesScores } from '../types/ComponentsExportsTypes'

interface PropsTypes { isScores?: TypesScores[], isMatch?: MatchScoresType[] };

function RollHistory({ isScores, isMatch }: PropsTypes) {
  const [isGameset, setGameSet] = useState<"MatchGame" | "ClassicGame" | "">("");
  const [isAlternate, setAlternate] = useState<boolean>(false);

  useEffect(() => {

    const pathPage = window.location.pathname;

    switch (pathPage) {

        case "/vs-com":
        setGameSet("MatchGame");
        break;

        case "/classic":
        setGameSet("ClassicGame");
        break;

    }

},[isScores, isMatch]);

  
//   console.log(isAlternate, isGameset);

  return (
    <div className='box-border'>
        <aside className='board-imp flex gap-3 flex-col'>
            <div className='text-roll-front'>
                <h3>Lanci Effetuati</h3>
            </div>
            <ul className='list-rolls'>
              {isGameset === "ClassicGame" && isScores?.map((element, index) => {
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

                {isGameset === "MatchGame" && isMatch?.map((element, index) => {
                    return(
                    <li className='roll-index flex-index' key={index}>
                        <div className='icon-dice'>{element.id}</div>
                        <span className='flex w-[160px] justify-between items-center gap-1'>
                            <h4 className='text-1xl font-bold text-white'>Vincitore: {element.win}</h4>
                            <h4 className='text-1xl font-bold text-white'>{element.player}-{element.com}</h4>
                        </span>
                    </li>
                    )
                })}

                { isScores?.length === 0 && isMatch?.length === 0 && <li className='roll-index flex items-center justify-center'>
                 <h4 className='text-1xl font-bold text-white'>Tira i Dadi per Iniziare.</h4>
                </li>}
            </ul>
        </aside>
    </div>
  )
}

export default React.memo(RollHistory)