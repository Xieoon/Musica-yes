import React, { useState } from "react";
import * as S from "./sidebar_block_s.js";
import SidebarItem from "./sidebar_item";
import { useEffect } from "react";

function SidebarBlock() {
  let [sceletVisible, setSceletVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSceletVisible(false);
    }, 5000);
  }, []);
  const sceletons = Array(3).fill(
    <S.sidebarItemSceleton className="sidebar__item-sceleton"></S.sidebarItemSceleton>
  );

  return (
    <S.sidebarBlock className="sidebar__block">
      {sceletVisible ? (
        sceletons
      ) : (
        <S.sidebarList className="sidebar__list">
          <SidebarItem number={"1"} />
          <SidebarItem number={"2"} />
          <SidebarItem number={"3"} />
        </S.sidebarList>
      )}
    </S.sidebarBlock>
  );
}

export default SidebarBlock;
