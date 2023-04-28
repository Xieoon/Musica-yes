import React from "react";
import "../companents_styles.css";
import * as S from "./filter_button_s";
import FilterItem from "./filter_itme";
const { useState } = React;
const { useEffect } = React;

function FilterButton({ name, visible, onSelect }) {
  let [filter, setFilter] = useState();

  useEffect(() => {
    fetch("https://painassasin.online/catalog/track/all/")
      .then((response) => response.json())
      .then((posts) => {
        if (name === "исполнителю") {
          let clearFilter = uniqFast(posts.map(el => el.author)).filter(el => el !== '-')
          setFilter(clearFilter.map((elem) => <FilterItem content = {elem}></FilterItem>));
        }
        if (name === "году выпуска") {
          let clearFilter = uniqFast(posts.map(el => el.release_date)).filter(el => el !== '-')
          setFilter(clearFilter.map((elem) => <FilterItem content = {elem}></FilterItem>));
        }
        if (name === "жанру") {
          let clearFilter = uniqFast(posts.map(el => el.genre)).filter(el => el !== '-' && el!== ' ')
          setFilter(clearFilter.map((elem) => <FilterItem content = {elem}></FilterItem>));
        }
      });
  }, []);

  let Clicker = (e) => {
    if (visible) {
      onSelect("null");
    } else {
      onSelect(name);
    }
  };

  function uniqFast(a) {
    let seen = {};
    let out = [];
    let len = a.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
      let item = a[i];
      if (seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  }

  return (
    <React.Fragment>
      <S.filterButton
        className={`filter__button _btn-text ${
          visible ? "filter_button-activity" : ""
        }`}
        onClick={Clicker}
      >
        {name}
      </S.filterButton>
      {visible && (
        <S.filterButtonDropdown className="filter__button-dropdown">
          <S.filterButtonContent className="filter__button-content">
            {filter}
          </S.filterButtonContent>
        </S.filterButtonDropdown>
      )}
    </React.Fragment>
  );
}

export default FilterButton;
