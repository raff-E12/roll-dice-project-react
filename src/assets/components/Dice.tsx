import React, { useRef } from 'react'
import "./css/DiceStyle.css"

export default function Dice({DiceRef}) {
  return (<>
    <div className="dice" ref={DiceRef}>
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
        <div className="face right"></div>
        <div className="face left"></div>
    </div>
  </>)
}
