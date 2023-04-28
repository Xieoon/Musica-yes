import React from "react";
const { useState } = React;
const { useEffect } = React;


function MyTrack(){
    useEffect(() => {
        fetch("https://painassasin.online/catalog/track/favourite/all/")
          .then((response) => response.json())
          .then((posts) =>{
console.log(posts);
          } );
      }, []);
return(
<div></div>
)

}

export default MyTrack;