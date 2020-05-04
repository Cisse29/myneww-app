import React from "react";
import "./hg.css"

function Hg(){
    return(
        <div className="hg_content">
        <div className="hg_area">
            <img src={process.env.PUBLIC_URL + "hug.png"} 
            alt="pic" />
        </div>
        <div className="pub_area">
        <img src={process.env.PUBLIC_URL + "pub.jpg"} 
            alt="pic" />
        </div>
        
        
        </div>
    )
}

export default Hg;