import React from "react";
import "../companents_styles.css";
import * as S from "./centerblock_content_s"
import ContentPlaylist from "../functional_companents/content_playlist";
import MainContentTitle from "../main/main_content_title"

function CenterblockContent(){
    return(
        <S.centerblockContent className="centerblock__content">
        <MainContentTitle/>
        <ContentPlaylist/>
        </S.centerblockContent>
    )
}

export default CenterblockContent;