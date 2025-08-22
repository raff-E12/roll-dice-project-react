import React, { createContext, useContext } from 'react'
import useDiceScheme from '../hooks/UseDiceGame';
import type { ExportTypes } from '../types/ComponentsExportsTypes';

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
  setOpen: () => {}
} );

function GlobalContext({children}: PropsTypes) {

  const useDiceGame = useDiceScheme();

  const ExportValues = { ...useDiceGame };

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
