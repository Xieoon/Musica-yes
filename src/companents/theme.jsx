import React, { useContext } from "react";

export const themes = {
    light: {
      color: '#282c34',
      background: "#fff",
      sideBarBackground:"#F6F5F3",
      greyColor:'#B1B1B1',
    },
    dark: {
      color: '#fff',
      background: '#181818',
      sideBarBackground:"#1C1C1C",
      greyColor:'#4E4E4E',
    },
  };

  
  export const ThemeContext = React.createContext ({
    theme: themes.dark, 
    toggleTheme: () => {},
    })

    export const useThemeContext = () => {
        const theme = useContext (ThemeContext) ;
        if(!theme) return theme.dark;
        return theme;
    }