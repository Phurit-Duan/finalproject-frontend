import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import MenuImage from "./images/Menu.png";
import HomeButton_D1 from "./images/Home-Button-D1.png";
import HomeButton_D2 from "./images/Home-Button-D2.png";
import HomeButton_C1 from "./images/Home-Button-C1.png";
import HomeButton_C2 from "./images/Home-Button-C2.png";
import HomeText from "./images/Home-Text.png";

function Home() {
  return (
    <div className="Container">
      <div className="MenuBar">
        <img src={MenuImage} className="MenuImage" alt="" />
        <div className="P-MenuHome">Index</div>
        <Link to="/About-us">
            <div className="MenuAboutUs">About Us</div>
        </Link>
        <Link to="/Contact">
            <div className="MenuContact">Contact</div>
        </Link>
      </div>
      <img src={HomeText} className="HomeText" alt="" />
      <Link to="/Detect-Object">
        <img src={HomeButton_D1} className="HomeButton_D" alt=""
          onMouseOver={(e) => (e.currentTarget.src = HomeButton_D2)}
          onMouseOut={(e) => (e.currentTarget.src = HomeButton_D1)}
        />
      </Link>
      <Link to="/Chatbot">
        <img src={HomeButton_C1} className="HomeButton_C" alt=""
          onMouseOver={(e) => (e.currentTarget.src = HomeButton_C2)}
          onMouseOut={(e) => (e.currentTarget.src = HomeButton_C1)}
        />
      </Link>
    </div>
  );
}
export default Home;
