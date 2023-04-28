import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "../functional_companents/playlist_item";
import * as S from "./collection_s";

function Collection() {
  const [heading, setHeading] = useState("");
  const [track, setTrack] = useState("");

  const params = useParams();
  useEffect(() => {
    fetch(`https://painassasin.online/catalog/selection/${params.id}`)
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts.name);

        setHeading(posts.name);
        setTrack(
          posts.items.map((el) => (
            <PlaylistItem
              id={el.id}
              name={el.name}
              author={el.author}
              album={el.album}
              duration_in_seconds={el.duration_in_seconds}
            ></PlaylistItem>
          ))
        );
      });
  }, []);
  return (
    <S.container>
      <h1>{heading}</h1>
      <div>{track}</div>
    </S.container>
  );
}

export default Collection;
