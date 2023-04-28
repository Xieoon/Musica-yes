import React from "react";
import { useState } from "react";

 function FilterItem(props){
    function clicker(){

    }

    return(
        <p onClick={clicker} key={props.content}>{props.content}</p>
    )
}

export default FilterItem