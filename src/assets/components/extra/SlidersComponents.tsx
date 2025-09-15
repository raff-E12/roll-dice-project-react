import React, { useMemo, useRef, useState } from 'react'
import "../../pages/css/SettingsModals.css"

export default function SlidersComponents() {
  const rageRef = useRef<HTMLInputElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [isValue, setValue] = useState<number>(0);

  const RangeAnimation = useMemo(() => {
    const MaxValue = Number(rageRef.current?.max);
    const CurrentValue = (isValue / MaxValue) * 100;
    
    if (lineRef.current !== null) {
      lineRef.current.style.background = `linear-gradient(to right, #efb100 ${CurrentValue}% , #DED8B7 ${CurrentValue}%)`;
    }

  }, [isValue]);

  return (<>
  <div className='range-components'>
     <div className='range-track' ref={lineRef}></div>
    <input type="range" min={0} max={100} className='range-sc' value={isValue} onChange={(e) => setValue(Number(e.target.value))} ref={rageRef} onInput={RangeAnimation}/>
  </div>
  </>)
}
