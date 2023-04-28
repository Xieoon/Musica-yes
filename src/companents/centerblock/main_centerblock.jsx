import React from "react";
import * as S from "./main_centerblock_s";
import CenterBlockSearch from "./centerblock_search";
import CenterBlockFilters from "./centerblock_filters";
import CenterblockContent from "./centerblock_content";

function MainCenterBlock() {
  return (
    <S.mainCenterblock className="main__centerblock centerblock">
      <CenterBlockSearch />
      <S.centerblockH2 className="centerblock__h2">Треки</S.centerblockH2>
      <CenterBlockFilters />
      <CenterblockContent />
    </S.mainCenterblock>
  );
}

export default MainCenterBlock;
