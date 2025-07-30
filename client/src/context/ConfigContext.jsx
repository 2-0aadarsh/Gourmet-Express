import { createContext } from "react";
import appData from "../data/data.json"; 

export const ConfigContext = createContext(null);

export const ConfigProvider = ({children}) =>{
  return (
    <ConfigContext.Provider value={appData}>
      {children}
    </ConfigContext.Provider>
  );
}