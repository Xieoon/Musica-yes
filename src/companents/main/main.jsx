import React from "react";
import * as S from "./main_s";
import MainNav from "./main_nav";
import MainCenterBlock from "../centerblock/main_centerblock";
import MainSidebar from "../saidebar/saidebar_main";
import { useThemeContext } from "../theme";

function Main(props) {
  const { theme } = useThemeContext();
  console.log(theme);

  return (
    <S.mainS  style={{
      backgroundColor:theme.background,
      color:theme.color,
    }}>
     
      <MainNav />
      <MainCenterBlock />
      <MainSidebar />
    </S.mainS>
  );
}

export default Main;
