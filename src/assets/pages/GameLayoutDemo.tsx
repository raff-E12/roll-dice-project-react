import React from 'react'
import "../css/TestLayoutDemo.css"

export default function GameLayoutDemo() {
  return (<>
  <div className='body-sc'>
    <div className="wrap">
        {/* <!-- Hidden toggle controls roll animation --> */}
        <input id="roll" type="checkbox" />

        <div className="board">
            <div className="title">
            <div className="logo-dot">DG</div>
            <div>
                <h1>Gioco Dadi — Prototype</h1>
                <p className="sub">Minimal — concept ispirato a Pinterest · Giocatore vs COM</p>
            </div>
            </div>

            <div className="dice-row">
            <div className="player-card">
                <div>
                <div className="who">Giocatore</div>
                <div className="score">Score: <strong>2</strong></div>
                </div>

                {/* <!-- Die: cambia classNamee "face-*" per mostrare faccia --> */}
                <div className="die player face-5" aria-hidden="true">
                <span className="dot dot--tl"></span>
                <span className="dot dot--ml"></span>
                <span className="dot dot--bl"></span>
                <span className="dot dot--tr"></span>
                <span className="dot dot--mr"></span>
                <span className="dot dot--br"></span>
                <span className="dot dot--c"></span>
                </div>
            </div>

            <div className="player-card" style={{ justifyContent:'flex-end'}}>
                <div style={{ textAlign: 'right' }}>
                <div className="who">Computer</div>
                <div className="score">Score: <strong>3</strong></div>
                </div>

                <div className="die com face-3" aria-hidden="true" style={{ marginLeft: "12px"}}>
                <span className="dot dot--tl"></span>
                <span className="dot dot--ml"></span>
                <span className="dot dot--bl"></span>
                <span className="dot dot--tr"></span>
                <span className="dot dot--mr"></span>
                <span className="dot dot--br"></span>
                <span className="dot dot--c"></span>
                </div>
            </div>
            </div>

            <div className="controls">
            {/* <!-- label toggles the hidden checkbox: attiva l'animazione --> */}
            <label htmlFor="roll" className="btn" role="button" aria-pressed="false">
                Tira
            </label>

            <div className="hint">Clicca "Tira" per animare i dadi. (Versione statica CSS-only)</div>
            </div>
        </div>

        <aside className="panel">
            <h3>Cruscotto & Storico</h3>

            <div className="scores">
            <div className="score-box">
                <div>
                <div className="small">Round</div>
                <div style={{ fontWeight:700 }}>#07</div>
                </div>
                <div style={{ textAlign:"right" }}>
                <div className="small">Risultato</div>
                <div style={{ fontWeight:700 }}>Giocatore 5 — COM 3</div>
                </div>
            </div>

            <div className="score-box" aria-hidden="true">
                <div>
                <div className="small">Totale</div>
                <div style={{ fontWeight:700 }}>Giocatore 24</div>
                </div>
                <div style={{ textAlign: "center" }}>
                <div className="small">COM</div>
                <div style={{ fontWeight:700 }}>27</div>
                </div>
            </div>
            </div>

            <div className="history" tabIndex={0} aria-label="Storico delle ultime giocate">
            {/* <!-- mockup di storico (puoi cambiare o riordinare manualmente) --> */}
            <div className="round"><div>#07 <span className="small">— Giocatore 5</span></div><div className="small">COM 3</div></div>
            <div className="round"><div>#06 <span className="small">— Giocatore 2</span></div><div className="small">COM 6</div></div>
            <div className="round"><div>#05 <span className="small">— Giocatore 6</span></div><div className="small">COM 2</div></div>
            <div className="round"><div>#04 <span className="small">— Giocatore 4</span></div><div className="small">COM 4</div></div>
            <div className="round"><div>#03 <span className="small">— Giocatore 1</span></div><div className="small">COM 5</div></div>
            <div className="round"><div>#02 <span className="small">— Giocatore 5</span></div><div className="small">COM 5</div></div>
            <div className="round"><div>#01 <span className="small">— Giocatore 3</span></div><div className="small">COM 2</div></div>
            </div>

        </aside>
        </div>
  </div>
  </>)
}
