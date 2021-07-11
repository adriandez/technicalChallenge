import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [global, setGlobal] = useState([]);
  return (
    <GlobalContext.Provider value={[global, setGlobal]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
