import React, {  useState, createContext } from 'react';

export const ChangeIntoDarkModa =   createContext() 

export const ThemeProviderIntoDarkModa = ({ children }) => {
    const [dark,setDark] = useState(true)
  
const changeIntoDark = ()=>{
    setDark((prev)=>!prev)
}

  return (
        <ChangeIntoDarkModa.Provider value={{dark,changeIntoDark}} >
            {children}
        </ChangeIntoDarkModa.Provider>
  );
}