import React from "react";
import "../companents_styles.css";

export default function PlayListItemSceleton(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image-scelet"></div>
          <div className="track__title-text-scelet"></div>
        </div>
        <div className="track__author-scelet"></div>
        <div className="track__album-scelet"></div>
        <div className="track__time-scelet"></div>
      </div>
    </div>
  );
}
