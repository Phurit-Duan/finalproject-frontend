import React from "react";
import { Link } from "react-router-dom";

import "./MenuBar.css";
import "./P1_Home.css";
import "./Footer.css";
import MenuImage from "./images/Menu.svg";
import ClassifyLogo from "./images/Logo-Classify.svg";
import DetectLogo from "./images/Logo-Detect.svg";
import AmuletLogo from "./images/Logo-Amulet.svg";
import ChatbotLogo from "./images/Logo-Chatbot.svg";
function Home() {

  return (
    <div className="Container">
      <label className="MenuBar"></label>
      <img src={MenuImage} className="MenuImageHome" alt="" />
      <p className="P-MenuHome">Home</p>
      <Link to="/api-for-developer">
        <p className="MenuDevelope">API</p>
      </Link>
      <Link to="/about-us">
        <p className="MenuAboutUs">About Us</p>
      </Link>
      <Link to="/contact">
        <p className="MenuContact">Contact</p>
      </Link>
      <div className="HomeContainer">
        <h1 className="HomeApplication">BUAI Education</h1>
        <p className="AppLine"></p>
        <div className="Vision">Vision</div>
        <p className="VisionLine"></p>
        <div className="HomeVision">
          <Link to="/bakery-classification" className="HomeClassify">
            <img src={ClassifyLogo} className="ClassifyLogo" alt="" />
            <p>Bakery Classification</p>
          </Link>
          <Link to="/thai-cash-detection" className="HomeDetect">
            <img src={DetectLogo} className="DetectLogo" alt="" />
            <p>Thai Cash Detection</p>
          </Link>
          <Link to="/buddhist-amulet-classification" className="HomeAmulet">
            <img src={AmuletLogo} className="AmuletLogo" alt="" />
            <p>Buddhist</p>
            <p>Amulet Classification</p>
          </Link>
        </div>
        <div className="Conver">Conversation</div>
        <label className="ConverLine"></label>
        <div className="HomeConver">
          <Link to="/sentiment-chatbot" className="HomeChatbotText">
            <img src={ChatbotLogo} className="ChatbotLogo" alt="" />  
            <p>Sentiment Analysis Chatbot</p>
          </Link>
          <Link to="/inclusive-chatbot" className="HomeChatbotImage">
            <img src={ChatbotLogo} className="ChatbotLogo" alt="" />  
            <p>Inclusive Chatbot</p>
          </Link>
        </div>
      </div>
      <div className="Footer-HD">
        <div className="Footer">
          <h1>Developed by</h1>
          <p>- Faculty of Engineering, Bangkok University</p>
          <div>- Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
