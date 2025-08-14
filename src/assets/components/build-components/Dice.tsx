import { useEffect, useMemo, useRef, useState } from 'react'
import "../css/Dice&Style.css"

export default function Dice() {
  const [isPlayer, setPlayer] = useState<number>(0);
  const [isCOM, setCOM] = useState<number>(0);
  const [isActive, setActive] = useState<boolean>(false);
  const [isFinished, setFinished] = useState<boolean>(false);
  const DiceRef = useRef<HTMLDivElement | null>(null);
  const DiceCOM = useRef<HTMLDivElement | null>(null);

  const RollDice = useMemo(() => {

    if (!isActive) return;
    const RandomNumber: number = Math.floor(Math.random() * 10);
    const RandomComputer: number = Math.floor(Math.random() * 10);

    if (RandomNumber >= 1 && RandomNumber <= 6 && RandomComputer >= 1 && RandomComputer <= 6) {
        setPlayer(RandomNumber);
        setCOM(RandomComputer);
        AnimationRollDice(RandomNumber, RandomComputer);
    } else {
      setActive(false)
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
        setFinished(true);
       }, 4050);
    }
  }

  const ResultsMatch = useMemo((): void => {
    if (isFinished) {

      if (isPlayer > isCOM) {
        window.alert("Ha Vinto il Player");
      } else if (isPlayer < isCOM) {
        window.alert("Ha Vinto il COM")
      } else if (isPlayer === isCOM) {
        window.alert("Parità");
      } else {
        window.alert("Riprova!!");
      }

      setActive(false)
      setFinished(false);

    }
  }, [isFinished])

  console.log("Player:",isPlayer, "COM:", isCOM, isActive)

  return (
    <>
    <div className='flex w-full h-screen items-center justify-center gap-2 flex-row'>
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

      <div className='container'>

          <div className="dice" ref={DiceCOM}>
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
              <div className="face right"></div>
              <div className="face left"></div>
          </div>

          <aside className='roll'>COM</aside>
      </div>

      </div>
    </>
  )
}
