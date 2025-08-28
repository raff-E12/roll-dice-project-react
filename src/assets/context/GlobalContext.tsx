import React, { createContext, useContext } from 'react'
import type { ExportTypes } from '../types/ComponentsExportsTypes';
import useClassicGame from '../hooks/useClassicMode';
import useMatchGame from '../hooks/useCOMGame';

type PropsTypes = React.PropsWithChildren;

const contextCreateGlobal = createContext<ExportTypes>( { 
  RollDice: () => {},
  DiceTotalRef: { current: { first: null, second: null } },
  isActive: false,
  isTotal: 0,
  isScores: { current: [] },
  isFirst: 0,
  isSecond: 0,
  ResetGameMode: () => {},
  isOpen: false,
  onClose: () => {},
  setOpen: () => {},
  RollDiceMatch: () => {},
  isScoresMatch: { current: [] },
  isPoints: { current: { player: 0, com: 0, points: { player: 0, com: 0, win: "" } } },
  isStatics: { current: [] },
  MatchRef: { current: { player: null, com: null }},
  isActiveMatch: false, 
  isPlayer: 0, 
  isCOM: 0, 
  isWin: "",
} );

function GlobalContext({children}: PropsTypes) {

  const useClassic = useClassicGame();
  const useMatch = useMatchGame();

  const ExportValues = { ...useClassic, ...useMatch };

  return (<>
  <contextCreateGlobal.Provider value={ExportValues}>
    {children}
  </contextCreateGlobal.Provider>
  </>)
}

function ExportGlobalContext (){
  const useGlobalExp = useContext(contextCreateGlobal);
  return useGlobalExp
}

export { GlobalContext, ExportGlobalContext }
