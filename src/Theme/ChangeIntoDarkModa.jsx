import React, { createContext, useState,useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ChangeIntoDarkModa = createContext();

export const ThemeProviderIntoDarkModa = ({ children }) => {
  const [dark, setDark] = useState(false);
 

  useEffect(() => {
    const loadDarkModePreference = async () => {
      try {
        const savedDarkMode = await AsyncStorage.getItem('darkMode');
        if (savedDarkMode !== null) {
          setDark(savedDarkMode === 'true');
        }
      } catch (error) {
        console.error('Error loading dark mode preference:', error);
      }
    };
    loadDarkModePreference();
  }, []);

  const changeIntoDark = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    AsyncStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <ChangeIntoDarkModa.Provider value={{dark, changeIntoDark }}>
      {children}
    </ChangeIntoDarkModa.Provider>
  );
};