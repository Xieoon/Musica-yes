import React from "react";
import "../companents_styles.css";
import * as S from "./content_playlist_s";
import PlaylistItem from "./playlist_item";
import { useState } from "react";
import { useEffect } from "react";
import PlayListItemScelet from "./sceletick"



function ContentPlaylist() {
  let [album, setAlbum] = useState();
  let [sceletVisible, setScelectVisible] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      fetch("https://painassasin.online/catalog/track/all/")
        .then((response) => response.json())
        .then((posts) => {
          setAlbum(posts.map((p) => PlaylistItem(p)));
          setScelectVisible(false);
        });
    }, 5000);
  }, []);
  const sceletons = Array(10).fill(<PlayListItemScelet></PlayListItemScelet>);
  return (
    <S.contentPlaylist className="content__playlist playlist">
     {sceletVisible ? sceletons : album}
    </S.contentPlaylist>
  );
}

export default ContentPlaylist;
