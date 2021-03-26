import React from "react";

import "./Options.css";
import DetectButton_U1 from "../images/Vision-Button-U1.png";
import DetectButton_U2 from "../images/Vision-Button-U2.png";

const Options = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    }
  ];

  const handleChange = e => {
    if (e.target.files.length) {
      props.MessageParser.parse("e.target.files[0]")

    }
};

 const buttonsMarkup = options.map((option) => (
    <div>
      <input 
        id="upload-button" 
        type="file" 
        style={{ display: "none" }}
        onChange={handleChange}
      />  
      <label htmlFor="upload-button">
        <img src={DetectButton_U1} className="image-button" alt=""
          onMouseOver={(e) => (e.currentTarget.src = DetectButton_U2)}
          onMouseOut={(e) => (e.currentTarget.src = DetectButton_U1)}>   
        </img>
      </label>
    </div>

  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
