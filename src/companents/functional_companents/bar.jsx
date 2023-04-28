import React from "react";
import "../companents_styles.css";
import * as S from "./bar-s.js";
import { useState, useRef,useEffect } from "react";
import { Login } from "../login/login";



function Bar() {
  const [active, setActive] = useState(true);
  const audi = useRef();
  const progressRef = useRef () ;

  useEffect ( () => {
    audi.current.ontimeupdate = () => {
  const progress = (audi.current.currentTime / audi.current.duration) * 1000
  progressRef.current.value = progress
  }}, [audi, progressRef])

  const progressChange = () => {
    audi.current.currentTime = progressRef.current.value / 1000 * audi.current.duration}
    


  function clicer() {
    setActive(!active);
    if (active) {
      audi.current.play();
    } else {
      audi.current.pause();
    }
  }

  
  return (
    <S.bar className="bar">
      <S.audi ref={audi} id="myAudio" controls>
        <source src="./audi/Bobby_Marleni_-_Dropin.mp3" type="audio/mpeg" />
      </S.audi>
      <S.barContent className="bar__content">
        <S.barPlayerProgress ref={progressRef} onChange={progressChange} defaultValue={0} max={1000} type={"range"} className="bar__player-progress"></S.barPlayerProgress>
        <S.barPlayerBlock className="bar__player-block">
          <S.barPlayer className="bar__player player">
            <S.playerControls className="player__controls">
              <S.playerBtnPrev className="player__btn-prev">
                <S.playerBtnPrevSvg
                  className="player__btn-prev-svg"
                  src="img/icon/prev.svg"
                  alt="prev"
                >
                  {/* <use href="./img/icon/sprite.svg"></use> */}
                </S.playerBtnPrevSvg>
              </S.playerBtnPrev>
              <S.playerBtnPlay
                onClick={clicer}
                className="player__btn-play _btn"
              >
                <S.playerBtnPlaySvg
                  className="player__btn-play-svg"
                  src={active ? "img/icon/play.svg" : "img/icon/pause.svg"}
                  alt="play"
                >
                  {/* <use href="img/icon/play.svg"></use> */}
                </S.playerBtnPlaySvg>
              </S.playerBtnPlay>
              <S.playerBtnNext className="player__btn-next">
                <S.playerBtnNextSvg
                  className="player__btn-next-svg"
                  src="img/icon/next.svg"
                  alt="next"
                >
                  {/* <use href="img/icon/next.svg"></use> */}
                </S.playerBtnNextSvg>
              </S.playerBtnNext>
              <S.playerBtnRepeat className="player__btn-repeat_btn-icon">
                <S.playerBtnRepeatSvg
                  className="player__btn-repeat-svg"
                  src="img/icon/repeat.svg"
                  alt="repeat"
                >
                  {/* <use href="img/icon/sprite.svg"></use> */}
                </S.playerBtnRepeatSvg>
              </S.playerBtnRepeat>
              <S.playerBtnShuffle className="player__btn-shuffle_btn-icon">
                <S.playerBtnShuffleSvg
                  className="player__btn-shuffle-svg"
                  src="img/icon/shuffle.svg"
                  alt="shuffle"
                >
                  {/* <use href="img/icon/sprite.svg"></use> */}
                </S.playerBtnShuffleSvg>
              </S.playerBtnShuffle>
            </S.playerControls>

            <S.playerTrackPlay className="player__track-play track-play">
              <S.trackPlayContain className="track-play__contain">
                <S.trackPlayImage className="track-play__image">
                  <S.trackPlaySvg className="track-play__svg" alt="music">
                    <use href="img/icon/sprite.svg"></use>
                  </S.trackPlaySvg>
                </S.trackPlayImage>
                <S.trackPlayAuthor className="track-play__author">
                  <S.trackPlayAuthorLink
                    className="track-play__author-link"
                    href="http://"
                  >
                    Ты та...
                  </S.trackPlayAuthorLink>
                </S.trackPlayAuthor>
                <S.trackPlayAlbum className="track-play__album">
                  <S.trackPlayAlbumLink
                    className="track-play__album-link"
                    href="http://"
                  >
                    Баста
                  </S.trackPlayAlbumLink>
                </S.trackPlayAlbum>
              </S.trackPlayContain>

              <S.trackPlayLikeDis className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <S.trackPlayLikeSvg
                    className="track-play__like-svg"
                    src="img/icon/like.svg"
                    alt="like"
                  >
                    {/* <use href="img/icon/sprite.svg"></use> */}
                  </S.trackPlayLikeSvg>
                </div>
                <S.trackPlayDislike className="track-play__dislike _btn-icon">
                  <S.trackPlayDislikeSvg
                    className="track-play__dislike-svg"
                    src="img/icon/dislike.svg"
                    alt="dislike"
                  >
                    {/* <use href="img/icon/sprite.svg"></use> */}
                  </S.trackPlayDislikeSvg>
                </S.trackPlayDislike>
              </S.trackPlayLikeDis>
            </S.playerTrackPlay>
          </S.barPlayer>
          <S.barVolumeBlock className="bar__volume-block volume">
            <S.volumeContent className="volume__content">
              <S.volumeImage className="volume__image">
                <S.volumeSvg className="volume__svg" alt="volume">
                  <use href="img/icon/sprite.svg"></use>
                </S.volumeSvg>
              </S.volumeImage>
              <S.volumeProgress className="volume__progress _btn">
                <S.volumeProgressLine
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </S.volumeProgress>
            </S.volumeContent>
          </S.barVolumeBlock>
        </S.barPlayerBlock>
      </S.barContent>
    </S.bar>
  );
}

export default Bar;
