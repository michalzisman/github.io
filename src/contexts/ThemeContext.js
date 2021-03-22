import React, { createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const theme = {
        button: 'pink',
        title: 'purple',
        text: 'black',
        width: '50%',
        height: '100px'
    }
        
    return (
        <ThemeContext.Provider value={{theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;