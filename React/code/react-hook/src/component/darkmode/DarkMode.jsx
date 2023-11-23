import React, { createContext, useState } from 'react'


export const ThemeContext = createContext();
export const DarkMode = ({children}) => {
    const [theme, setTheme] = useState('light'); // 컬러모드의 기본설정 값
    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <div>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}
