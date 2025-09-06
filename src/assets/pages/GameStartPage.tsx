import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./css/StartPageStyle.css"
import StartBanner from '../components/StartBanner'
import { NavLink } from 'react-router';
import SoundStartGame from "../../../public/sound/bg_welcome_game.mp3"
import SoundClickBtn from "../../../public/sound/button-press-sound.mp3"
import ButtonComponents from '../components/extra/ButtonComponents';

export default function GameStartPage() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const onClose = () => setOpen(false);
  const AudioRef = useRef<{ first: HTMLAudioElement | null, second: HTMLAudioElement | null}>({ first: null, second: null });
  const [isPlay, setPlay] = useState<boolean>(false);
  
  const AudioPlayInteraction = useMemo(() => {
    if (isPlay) {
      AudioRef.current.first?.play();
      AudioRef.current.first!.volume = 0.7;
    } else {
      AudioRef.current.first?.pause();
    }
  }, [isPlay])

  return (<>
    <section className='start-screen flex-center-col'>
       <div className='start-top'>
         
        <ButtonComponents 
         isIcons={isPlay ? " fa-solid fa-volume-high" : "fa-solid fa-volume-xmark"}
         isClass='btn-volume'
         isText={ { cond: false, text: "" } }
         setPlay={setPlay}
         isPlay={isPlay}
        />

       </div>

        <div className='screen-section flex-center-col'>
            <span className='logo-screen'></span>
            <span className='option-sc container-small'>
                <ButtonComponents 
                 isClass='btn start'
                 isText={{ cond: true, text: "Gioca" }}
                 isNavigate={{ cond:true, to: "/classic" }}
                />

                <ButtonComponents 
                 isOpen={setOpen}
                 isClass='btn info' 
                 isText={{ cond: true, text: "Info" }}
                 />
            </span>
        </div>

        <div id='dice-bg-1'></div>
        <div id='dice-bg-2'></div>

        <div className='text-bottom'>
          <p>Progetto Realizzato da me.</p>
        </div>

    <audio preload="auto" className='box-hidden' controls ref={(audio) => { AudioRef.current.first = audio } } loop>
       <source src={SoundStartGame} type='audio/mpeg'/>
    </audio>

    </section>

    <StartBanner isOpen={isOpen} onClose={onClose}/>
  </>
  )
}
