import React, { createContext, useState } from 'react';

// Create the DarkModeContext
const DarkModeContext = createContext({});

// Create the DarkModeProvider component
const DarkModeProvider = ({ children }:any) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };