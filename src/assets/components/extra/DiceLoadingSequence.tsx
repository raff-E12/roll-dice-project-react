import React, { useEffect, useState } from 'react'

export default function DiceLoadingSequence() {
  const [isNumber, setNumber] = useState<string>("");
  const [isCount, setCount] = useState<number>(0);
  const listNumbers = [ "one", "two", "three", "four", "five", "six" ];
  
  useEffect(() => {
  
      let interval = setInterval(() => {
         setCount((prev) => {
          if (prev < listNumbers.length - 1) {
             return prev + 1
          } else {
            return prev = 0;
          }
         })
      }, 1200);
  
      setNumber(listNumbers[isCount]);
  
      return () => clearInterval(interval)
  },[isCount])

  return (<>
    <div className='icon-ld-box'>
        <i className={`fa-solid fa-dice-${isNumber}`} id='icon-loading'></i>
    </div>
  </>)
}
