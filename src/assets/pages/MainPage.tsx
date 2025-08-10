import React, { useEffect, useMemo, useRef, useState } from 'react'
import Dice from '../components/Dice'
import MainLogo from "../../../public/img/logo_2.png"
import Modals from '../components/Modals'
import "../css/Dice&Style.css"

type ResultsType = { id:number, player:number, com:number, match:number };
type ScoresText = "Win Player" | "Win COM" | "Draw" | "";

export default function MaingPage() {
    const [isPlayer, setPlayer] = useState<number>(0);
    const [isCOM, setCOM] = useState<number>(0);
    const [isActive, setActive] = useState<boolean>(false);
    const [isFinished, setFinished] = useState<boolean>(false);
    const DiceRef = useRef<HTMLDivElement | null>(null);
    const DiceCOM = useRef<HTMLDivElement | null>(null);
    const [isScores, setScores] = useState<ResultsType[]>([]);
    const [isReserve, setReserve] = useState<ResultsType[]>([]);
    const [isCount, setCount] = useState<number>(1);
    const [isResults, setResults] = useState<ScoresText>("");

      const RollDice = useMemo(() => {
    
        if (!isActive) return;
        const RandomNumber: number = Math.floor(Math.random() * 6);
        const RandomComputer: number = Math.floor(Math.random() * 6);
    
        if (RandomNumber >= 1 && RandomNumber <= 6 && RandomComputer >= 1 && RandomComputer <= 6) {
            setPlayer(RandomNumber);
            setCOM(RandomComputer);
            AnimationRollDice(RandomNumber, RandomComputer);
        } else {
           setActive(false);
           setFinished(false);
        }
      }, [isActive]);
    
      function AnimationRollDice(random: number, COM: number): void {
        DiceRef.current!.style.animation = "rolling 4s";
        DiceCOM.current!.style.animation = "rolling 4s";
    
        if (Object.keys(DiceRef).length !== 0 && random !== 0 && Object.keys(DiceCOM).length !== 0 && COM !== 0) {
           setTimeout(() => {
            switch (random) {
                case 1:
                DiceRef.current!.style.transform = 'rotateX(0deg) rotateY(0deg)';
                DiceCOM.current!.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;
    
                case 6:
                DiceRef.current!.style.transform = 'rotateX(180deg) rotateY(0deg)';
                DiceCOM.current!.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;
    
                case 2:
                DiceRef.current!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                DiceCOM.current!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;
    
                case 5:
                DiceRef.current!.style.transform = 'rotateX(90deg) rotateY(0deg)';
                DiceCOM.current!.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;
    
                case 3:
                DiceRef.current!.style.transform = 'rotateX(0deg) rotateY(90deg)';
                DiceCOM.current!.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;
    
                case 4:
                DiceRef.current!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                DiceCOM.current!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;
              }
    
    
            switch (COM) {
              case 1:
              DiceCOM.current!.style.transform = 'rotateX(0deg) rotateY(0deg)';
              break;
    
              case 6:
              DiceCOM.current!.style.transform = 'rotateX(180deg) rotateY(0deg)';
              break;
    
              case 2:
              DiceCOM.current!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
              break;
    
              case 5:
              DiceCOM.current!.style.transform = 'rotateX(90deg) rotateY(0deg)';
              break;
    
              case 3:
              DiceCOM.current!.style.transform = 'rotateX(0deg) rotateY(90deg)';
              break;
    
              case 4:
              DiceCOM.current!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
              break;
            }
    
            DiceRef.current!.style.animation = "none";
            DiceCOM.current!.style.animation = "none";

            setFinished(true)
           }, 4050);
        }
    }

    function addResultsScores(): void {
      const ResultScores = Array.from(new Map(isReserve.map((element) => [element.id, element])).values());
        setScores(ResultScores);
        setActive(false)
        setFinished(false);

        if (isPlayer > isCOM) {
          setResults("Win Player");
        } else if (isPlayer < isCOM) {
          setResults("Win COM");
        } else if (isPlayer === isCOM) {
          setResults("Draw")
        }
        
    }

    const ResultsStates = (): void => {
      if (!isFinished) return;
      setCount(isCount + 1);
      const ResultsComposition: ResultsType = { id: isCount, player: isPlayer, com: isCOM, match: isCount };
      setReserve(list => [...list, ResultsComposition]);
      const FindMatch = isReserve.find(element => element.match === isCount);
      if (!FindMatch) return addResultsScores();
    };

    useEffect(ResultsStates,[isActive, isFinished]);

    console.log("Fine:", isFinished, "Attivo:", isActive, "Risultato:", isScores, "Riserva:", isReserve)

  return (<>
   <div className='main-sc'>

     <nav className='navbar-sc'>
        <div className='logo-sc'>
          <img src={MainLogo} alt="logo-sc" />
        </div>

        <div className='dropmenu-sc'>

           <div className='icon-drop-menu'>
            <i className='material-symbols-outlined'>menu</i>
           </div>

            <ul className='drop-menu hidden'>
                <li>Statitiche</li>
                <li>Info</li>
                <li>Temi</li>
            </ul>
        </div>
     </nav>


     <main className='menu-sc'>

      <div className='text-msg'>
        <h4 className='font-montserrant'>{isResults}</h4>
      </div>

         <div className='score-sc'>
           <div className='score-tab'>
            <i className="bi bi-person"></i>
              <h4>Giocatore</h4>
              <p><b>Score:</b> 0</p>
          </div>

          <div className='score-tab'>
            <i className="bi bi-robot"></i>
              <h4>COM</h4>
              <p><b>Score:</b> 0</p>
           </div>
         </div>

        <section className='dice-sc'>

            <div className='col-dice-sc'>
                  <h3 className='text-2xl font-bold'>Dado Giocatore</h3>
                  <div className="dice" ref={DiceRef}>
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                </div>
            </div>


            <div className='col-dice-sc'>
                  <h3 className='text-2xl font-bold'>Dado COM</h3>
                  <div className="dice" ref={DiceCOM}>
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                </div>
            </div>
        </section>

        <div className='btn-dice'>
          <button className='btn font-bold' onClick={() => setActive(true)}>Tira il Dado</button>
        </div>

        <div className='score-point-sc'>
          <ul>
            {isScores.map((element, index) => {
              return(<li key={index} className='score-points'><b>Partita-{element.match}°:</b> <p>{element.player}-{element.com}</p></li>)
            })}
          </ul>
        </div>

     </main>

   </div>
  </>)
}
