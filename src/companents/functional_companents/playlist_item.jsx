import React from "react";
import "../companents_styles.css";
import * as S from "./playlist_item_s";
function PlaylistItem(props) {
  return (
    <S.playlistItemS key={props.id} className="playlist__item">
      <S.playlistTrackS className="playlist__track track">
        <S.trackTitleS className="track__title">
          <S.trackTitleImageS className="track__title-image">
            <S.trackTitleSvgS
              className="track__title-svg"
              alt="music"
            ></S.trackTitleSvgS>
          </S.trackTitleImageS>
          <div className="track__title-text">{props.name}</div>
        </S.trackTitleS>
        <S.trackAuthorLinS className="track__author">
          {props.author}
        </S.trackAuthorLinS>
        <S.trackAlbumLinS className="track__album">
          {props.album}
        </S.trackAlbumLinS>
        <div className="track__time">
          <S.trackTimeSvgS
            className="track__time-svg"
            alt="time"
          ></S.trackTimeSvgS>
          <S.trackTimeText className="track__time-text">
            {props.duration_in_seconds}
          </S.trackTimeText>
        </div>
      </S.playlistTrackS>
    </S.playlistItemS>
  );
}
export default PlaylistItem;
