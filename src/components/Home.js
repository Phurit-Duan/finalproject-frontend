import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import "./MenuBar.css";
import "./Home.css";

import MenuImage from "./images/Menu.png";
import Detect from "./Detect";
import Chatbot from "./Chatbot";



function Home() {

  return (
    <div className="Container">
      <div className="MenuBar">
        <img src={MenuImage} className="MenuImage" alt="" />
        <div className="P-MenuHome">Home</div>
        <Link to="/About-us">
            <div className="MenuAboutUs">About Us</div>
        </Link>
        <Link to="/Contact">
            <div className="MenuContact">Contact</div>
        </Link>
        <Detect />
        <Chatbot />

      </div>
    </div>
  );
}
export default Home;
