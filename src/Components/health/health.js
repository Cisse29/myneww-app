import React from "react";
import "./health.css"

function Health(){
    return(
        <div className="health_content">
        <div className="health_area">
            <img src={process.env.PUBLIC_URL + "protect.jpg"} 
            alt="pic" />
        </div>
        
        </div>
    )
}
export default Health;