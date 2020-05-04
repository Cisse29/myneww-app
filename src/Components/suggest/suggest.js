import React from "react";
import "./suggest.css"

function Suggest() {
    return (
      <div>
        <div className="suggest">
          <div className="title1">
            <h5>Suggest a feature</h5>
            <div className="text_content">
              <p>what would make the app more usefull to you?</p>
            </div>
          </div>
  
          <div className="idea">Idea</div>
          <div className="input_content">
            <input
              type="text"
              name="idea"
              id="idea"
              className="idea_content"
              required
            />
          </div>
          <div className="description">Description</div>
          <div className="desc_content">
            <textarea id="description" className="desc_area" />
          </div>
          <div className="submit_content">
            <div className="submit">Submit</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Suggest;