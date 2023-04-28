import React from "react";
import "../companents_styles.css";
import * as S from "./centerblock_search_s.js"
function CenterBlockSearch() {
  return (
    <S.centerblockSearch className="centerblock__search search">
      <S.searchSvg className="search__svg">
        <use href="img/icon/sprite.svg"></use>
      </S.searchSvg>
      <S.searchText className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.centerblockSearch>
  );
}


export default CenterBlockSearch