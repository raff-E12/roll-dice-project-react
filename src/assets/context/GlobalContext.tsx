import React, { createContext, useContext } from 'react'
import useDiceScheme from '../hooks/UseDiceGame';

type PropsTypes = React.PropsWithChildren;
type ExportValuesTypes = { RollDice: () => void };

const contextCreateGlobal = createContext<ExportValuesTypes | {}>({});

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
