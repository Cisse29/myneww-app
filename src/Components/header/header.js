import React from 'react';
import "./header.css"

function Header(){

    return(
        <div className="box_header">
        <div className="head_img">
            <img src={process.env.PUBLIC_URL + "/edlbs.png"} 
            alt="pic" />
        </div>
        <div className="box_search">
      <form>
        <label for="search">Search</label>
        <input type="text" name="search" id="search" title="Search" />
      </form>
    </div>
        </div>
    )
}
export default Header;