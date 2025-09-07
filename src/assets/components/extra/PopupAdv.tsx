import React from 'react'
import "../css/ModalsAdv.css"

type PropsType = { isText: string, isAdv: boolean, setAdv: (value: boolean) => void };

export default function PopUpAdv({isText, isAdv, setAdv}: PropsType) {
  return (<>
   {isAdv && <div className="container-pop pop-ani">
       <div className='pop-con'>
          <p>{isText}</p>
          <button className='btn-pop' onClick={() => setAdv(false)}><i className="fa-solid fa-xmark"></i></button>
       </div>
    </div>}
  </>)
}
