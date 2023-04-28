import React from "react";
import "../companents_styles.css";
import * as S from "./sidebar_item_s.js";
import { Link } from "react-router-dom";


function SidebarItem({ number }) {
  return (
    <S.sidebarItem className="sidebar__item">
  <Link to={`/collection/${number}`}>
        <S.sidebarImg
          className="sidebar__img"
          src={`img/playlist${number}.png`}
          alt="day's playlist"
        />
     </Link>
    </S.sidebarItem>
  );
}

export default SidebarItem;
