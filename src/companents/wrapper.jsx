import React from "react";
import "./companents_styles.css";
import * as S from "./wrapper_s";
import Main from "./main/main";
import Bar from "./functional_companents/bar";
import { useState } from "react";
import { ThemeContext, themes } from "./theme";

function Wrapper() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);
  const toggleTheme = () => {
    if (currentTheme === themes.light) {
      setCurrentTheme(themes.dark);
      return;
    }
    setCurrentTheme(themes.light);
  };

  return (
    <S.wrapperS className="wrapper">
      <S.containerS className="container">
        <ThemeContext.Provider value={{theme:currentTheme, toggleTheme}}>
        <Main />  
        <Bar />
        </ThemeContext.Provider>
      </S.containerS>
    </S.wrapperS>
  );
}

export default Wrapper;
