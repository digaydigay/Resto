import { useState } from "react";
import { createContext, useContext } from "react";

export const ToogleContext = createContext({});

export const useToogle = () => {
  return useContext(ToogleContext);
};

export const ToogleProvider = ({ children }) => {
  const [isProfile, setIsProfile] = useState(false);
  const values = {
    isProfile,
    setIsProfile,
  };
  return (
    <ToogleContext.Provider value={values}>{children}</ToogleContext.Provider>
  );
};
