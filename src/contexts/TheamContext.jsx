import React, { createContext, useContext, useState } from 'react';

const TheamContext = createContext();

const TheamProvider = ({ children }) => {

  const [theme, setTheme] = useState('light');

    return (
        <TheamContext.Provider value={{ theme, setTheme }}>
            {children}
        </TheamContext.Provider>
    );
};

const useTheam = () => {
    return useContext(TheamContext);
};

export { TheamProvider, useTheam };
