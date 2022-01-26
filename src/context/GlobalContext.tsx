import { createContext, useEffect, useState, ReactNode } from "react";

import { IStore } from "../../types";

interface IGlobalContext {
  store: IStore | null;
  setStore: (store: IStore | null) => void;
}

interface IGlobalContextProvider {
  children: ReactNode;
  setAuth: (store: IStore | null) => void;
}

const GlobalContext = createContext({} as IGlobalContext);

const GlobalContextProvider = ({
  children,
  setAuth,
}: IGlobalContextProvider) => {
  const [store, setStore] = useState<IStore | null>(null);
  
  useEffect(() => {
    setAuth(store);
  }, [store]);

  return (
    <GlobalContext.Provider
      value={{ store, setStore }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
