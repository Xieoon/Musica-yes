import React from "react";
// import * as S from "./fleck";
import Bar from "../functional_companents/bar";
import MainNav from "../main/main_nav";
import * as S from "./fleck_s"


function Fleck(props) {
  return (
    <div>
      <S.mainContent>
      <MainNav></MainNav>
      {props.content}
      </S.mainContent>
      <Bar></Bar>
    </div>
  );
}

export default Fleck;
