import React from "react";
import "../companents_styles.css";
import * as S from "./main_content_title_s.js";
function MainContentTitle() {
  return (
    <S.contentTitle className="content__title playlist-title">
      <S.playlistTitleCol className="playlist-title__col col01">
        Трек
      </S.playlistTitleCol>
      <S.playlistTitleCol className="playlist-title__col col02">
        ИСПОЛНИТЕЛЬ
      </S.playlistTitleCol>
      <S.playlistTitleCol className="playlist-title__col col03">
        АЛЬБОМ
      </S.playlistTitleCol>
      <S.playlistTitleCol className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use href="img/icon/sprite.svg"></use>
        </svg>
      </S.playlistTitleCol>
    </S.contentTitle>
  );
}

export default MainContentTitle;
