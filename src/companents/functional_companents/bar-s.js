import styled from "styled-components";


export const audi = styled.audio`
display: none;


`
export const bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;

export const barContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  
`;

export const barPlayerProgress = styled.input`
  -webkit-appearance: none;
    width: 100%;
    height: 4px;
    /* background: #d3d3d3; */
    background: grey;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; 
    appearance: none;
    border-radius:35px;
    width: 40px; 
    height: 40px; 
    background-image: url(img/icon/weider.png); 
    background-color:red;
    background-size: contain;
    cursor: pointer;}
    &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    /* background: #4CAF50; */
    background: yellow;
    cursor: pointer;
}
`;

export const barPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const barPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;

export const playerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const playerBtnPrev = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin-right: 23px;
`;

export const playerBtnPrevSvg = styled.img`
  width: 15px;
  height: 14px;

`;

export const playerBtnPlay = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 23px;
`;

export const playerBtnPlaySvg = styled.img`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;

export const playerBtnNext = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin-right: 28px;
  fill: #a53939;
`;

export const barVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

export const playerBtnNextSvg = styled.img`
  width: 15px;
  height: 14px;
`;

export const playerBtnRepeat = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const playerBtnRepeatSvg = styled.img`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const playerBtnShuffle = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const playerBtnShuffleSvg = styled.img`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export const playerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const trackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const trackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;

export const trackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;

export const trackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;

export const trackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;

export const trackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;
export const trackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;

export const trackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

export const trackPlayLike = styled.div`
  padding: 5px;
`;
export const trackPlayLikeSvg = styled.img`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
export const volumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

export const trackPlayDislike = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`;
export const trackPlayDislikeSvg = styled.img`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;

export const volumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;

export const volumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;
export const volumeProgress = styled.div`
  width: 109px;
`;
export const volumeProgressLine = styled.input`
  width: 109px;
  -webkit-appearance: none;
    width: 100%;
    height: 4px;
   
    background: grey;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none; 
    appearance: none;
    border-radius:25px;
    width: 35px; 
    height: 35px; 
    background-image: url(img/icon/shturmovik.png); 
    background-color:red;
    background-size: contain;
    cursor: pointer;}
    &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    
    background: yellow;
    cursor: pointer;
}
`;
