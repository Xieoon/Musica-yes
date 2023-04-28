import React from "react";
import * as S from "./saidebar_main_s";
import SidebarBlock from "./sidebar_block"
import SidebarPersonal from  "./sidebar_personal"
import { useThemeContext } from "../theme";

function MainSidebar() {
  const{theme}=useThemeContext();
  console.log(theme);
  return (

    <S.mainSidebar >
      <SidebarPersonal/>
      <SidebarBlock />
    </S.mainSidebar>
  );
}

export default MainSidebar;
