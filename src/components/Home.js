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
      <p className="P-MenuHome">Home</p>
      <Link to="/About-us">
        <p className="MenuAboutUs">About Us</p>
      </Link>
      <Link to="/Contact">
        <p className="MenuContact">Contact</p>
      </Link>
      <h1 className="HomeApplication">Application</h1>
      <label className="AppLine"></label>
      <div className="Vision">Vision</div>
      <label className="VisionLine"></label>
      <div className="Conver">Conversation</div>
      <label className="ConverLine"></label>
      <Link to="/Image-Classification">
        <img src={ClassifyLogo} className="ClassifyLogo" alt="" />
        <div className="HomeClassify">Image-Classification</div>
      </Link>
      <Link to="/Object-Detection">
      <img src={DetectLogo} className="DetectLogo" alt="" />
        <div className="HomeDetect">Object-Detection</div>
      </Link>
      <Link to="/Chatbot-text-only">
        <img src={ChatbotLogo} className="ChatbotTextLogo" alt="" />  
        <div className="HomeChatbotText">Chatbot (text only)</div>
      </Link>
      <Link to="/Chatbot-text-image">
        <img src={ChatbotLogo} className="ChatbotImageLogo" alt="" />  
        <div className="HomeChatbotImage">Chatbot (text and image)</div>
      </Link>
    </div>
  );
}
export default Home;
