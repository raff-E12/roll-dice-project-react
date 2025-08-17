import React from 'react'
import "./css/DiceStyle.css"

export default function Dice() {
  return (<>
    <div className="dice" style={{transform:"rotateX(90deg) rotateY(0deg)"}}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
    </div>
  </>)
}
