import React from "react";
import { Link } from "react-router-dom";

import "./MenuBar.css";
import "./Home.css";

import MenuImage from "./images/Menu.png";
import ClassifyLogo from "./images/ClassifyLogo.png";
import DetectLogo from "./images/DetectLogo.png";
import ChatbotLogo from "./images/ChatbotLogo.png";
function Home() {

  return (
    <div className="Container">
      <label className="MenuBar"></label>
        <img src={MenuImage} className="MenuImage" alt="" />
        <div className="P-MenuHome">Home</div>
        <Link to="/About-us">
          <div className="MenuAboutUs">About Us</div>
        </Link>
        <Link to="/Contact">
          <div className="MenuContact">Contact</div>
        </Link>
        <div className="HomeApplication">Application</div>
        <label className="AppLine"></label>
        <Link to="/Image-Classification">
          <img src={ClassifyLogo} className="ClassifyLogo" alt="" />
          <div className="HomeClassify">Image-Classification</div>
        </Link>
        <Link to="/Object-Detection">
        <img src={DetectLogo} className="DetectLogo" alt="" />
          <div className="HomeDetect">Object-Detection</div>
        </Link>
        <Link to="/NLP-Chatbot">
          <img src={ChatbotLogo} className="ChatbotLogo" alt="" />  
          <div className="HomeChatbot">NLP-Chatbot</div>
        </Link>
    </div>
  );
}
export default Home;
