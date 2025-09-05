import React, { useMemo, useState } from 'react'
import "./css/BoardBoxStyle.css"
import type { TextDiceThrowing } from '../types/ComponentsExportsTypes'

type PropsTypes = { isActive: boolean };

export default function TextBoard({isActive}: PropsTypes) {
  const [isText, SetText] = useState<TextDiceThrowing>("Pronto al lancio?");
  
  useMemo(()  => { SetText(isActive ? "Occhio al risultato…" : "Pronto al lancio?") }, [isActive]);

  return (<>
    <section className='box-border'>
      <aside className='text-board'>
        <h2>{isText}</h2>
      </aside>
    </section>
  </>)
}
