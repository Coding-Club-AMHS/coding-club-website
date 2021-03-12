import React, {useState, createContext, useContext} from 'react';

const IntroContext = createContext();

export function IntroContextWrapper({ children }) {
    const [introState, setIntroState] = useState(false);
    const handleIntroState = introState => {
        setIntroState(introState);
    }

    const contextProps = {introState, handleIntroState};
  
    return (
      <IntroContext.Provider value={contextProps}>
        {children}
      </IntroContext.Provider>
    );
}
