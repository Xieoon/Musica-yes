import React from "react";
import FilterButton from "../functional_companents/filter_button";
// import "../companents_styles.css";
import * as S from "./centerblock_filters_s";
const { useState } = React;

function CenterBlockFilters() {
  let [selectedFilter, setSelectedFilter] = useState("null");

  return (
    <S.centerblockFilter className="centerblock__filter filter">
      <S.filterTitle className="filter__title">Искать по:</S.filterTitle>
      <S.dropdown className="dropdown">
        <FilterButton
          visible={selectedFilter === "исполнителю"}
          onSelect={(select) => setSelectedFilter(select)}
          name={"исполнителю"}
        />
      </S.dropdown>
      <S.dropdown className="dropdown">
        <FilterButton
          visible={selectedFilter === "году выпуска"}
          onSelect={(select) => setSelectedFilter(select)}
          name={"году выпуска"}
        />
      </S.dropdown>
      <S.dropdown className="dropdown">
        <FilterButton
          visible={selectedFilter === "жанру"}
          onSelect={(select) => setSelectedFilter(select)}
          name={"жанру"}
        />
      </S.dropdown>
    </S.centerblockFilter>
  );
}

export default CenterBlockFilters;
