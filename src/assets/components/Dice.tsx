import React, { useRef, type Ref } from 'react'
import "./css/DiceStyle.css"
import type { RefDice } from '../types/ComponentsExportsTypes'

type PropsDice = { DiceRef: (dice: HTMLDivElement) => void };

export default function Dice({DiceRef}: PropsDice ) {
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
