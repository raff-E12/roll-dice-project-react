import React, { useEffect, useState } from 'react'
import "./css/BoardBoxStyle.css"

interface PropsTypes { isTotal?: number, isFirst?: number, isSecond?: number, Win?: string, PointPlayer?: number, PointCOM?: number };

function ResultBoard({isTotal, isFirst, isSecond, Win, PointPlayer, PointCOM}: PropsTypes) {
  const [isGame, setGameSet] = useState<"MatchGame" | "ClassicGame" | "">("");

   useEffect(() => {
    const pathPage = window.location.pathname;
    switch (pathPage) {

        case "/vs-com":
        setGameSet("MatchGame");
        break;

        case "/classic":
        setGameSet("ClassicGame");        
        break;

    }}, [])

  return (<>
   <section className='box-border mt-2'>
      <aside className='text-board board-rs'>
        { isGame === "ClassicGame" ?<h2 className='text-res'>
          {`PrimoDado: ${isFirst} SecondoDado: ${isSecond} Risultato: ${isTotal}`}
        </h2>: <h2 className='text-res'>
          {`Vittoria: ${Win} Player: ${PointPlayer} COM: ${PointCOM}`}  
        </h2>}
      </aside>
    </section>
  </>)
}


export default React.memo(ResultBoard)