import React from "react";
import { useState } from "react";

function Lonizator(){
const [formInfo,setFormInfo] = useState({})

function checkForm(e){
let name = e.target.name
if(formInfo.name){
    
}
}

    return(
        <div>
            <input name="login" type="text" onChange={checkForm}/>
            <input name="name" type="text" />
        </div>
        
        
    )
}