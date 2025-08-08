import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function App() {
  const [isNumber, setNumber] = useState<number>(0);
  const [isActive, setActive] = useState<boolean>(false);
  const DiceRef = useRef<HTMLDivElement | null>(null);

  const RollDice = useMemo(() => {

    if (!isActive) return;
    const RandomNumber: number = Math.floor(Math.random() * 10);

    if (RandomNumber >= 1 && RandomNumber <= 6) {
        setNumber(RandomNumber);
        AnimationRollDice(RandomNumber)
    } else {
      setActive(false);
    }

  }, [isActive]);

  function AnimationRollDice(random: number): void {
    DiceRef.current!.style.animation = "rolling 4s";

    if (Object.keys(DiceRef).length !== 0 && random !== 0) {
       setTimeout(() => {
          switch (random) {
            case 1:
                  DiceRef.current!.style.transform = 'rotateX(0deg) rotateY(0deg)';
                  break;

              case 6:
                  DiceRef.current!.style.transform = 'rotateX(180deg) rotateY(0deg)';
                  break;

              case 2:
                  DiceRef.current!.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                  break;

              case 5:
                  DiceRef.current!.style.transform = 'rotateX(90deg) rotateY(0deg)';
                  break;

              case 3:
                  DiceRef.current!.style.transform = 'rotateX(0deg) rotateY(90deg)';
                  break;

              case 4:
                  DiceRef.current!.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                  break;

              default:
              break;
          }

          DiceRef.current!.style.animation = "none";
       }, 4050);
    }

    setActive(false)
  }

  console.log(isNumber, isActive)

  return (
    <>
    <div className='container'>

        <div className="dice" ref={DiceRef}>
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
            <div className="face right"></div>
            <div className="face left"></div>
        </div>

        <button className="roll" onClick={() => setActive(true)}>Roll Dice</button>
    </div>
    </>
  )
}

export default App
