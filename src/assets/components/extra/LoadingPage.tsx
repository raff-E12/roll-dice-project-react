import React, { useEffect, useState } from 'react'
import "../css/LoadingScStyle.css"

export default function LoadingPage() {
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
<section className='loading-sc container-full'>
     <div className='loading-box'>
        <div className='logo-loading'></div>
        <div className='icon-ld-box'>
          <i className={`fa-solid fa-dice-${isNumber}`} id='icon-loading'></i>
        </div>
     </div>
  </section>
  </>)
}
