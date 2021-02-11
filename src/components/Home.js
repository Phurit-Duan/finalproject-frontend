import React from "react";
import {Link } from "react-router-dom";

import  './Home.css';
import MenuImage from './images/Menu.png';
import HomeButton_D1 from './images/Home-Button-D1.png';
import HomeButton_D2 from './images/Home-Button-D2.png';
import HomeButton_C1 from './images/Home-Button-C1.png';
import HomeButton_C2 from './images/Home-Button-C2.png';
import Home_Text from './images/Home-Text.png'

function Home ()
{
    return(
        <div className="Container">
            <div className="MenuBar">
                <img src={MenuImage} className="MenuImage" alt="MenuImage" />
                <div className="MenuHome">Home</div>
                <Link to="/AboutUs>">
                    <div className="MenuAboutUs">About Us</div>
                </Link>
                <div className="MenuContact">Contact</div>
            </div>
            <img src={Home_Text} className="Home_Text"/>
            <img src={HomeButton_D1} className="HomeButton_D"
                onMouseOver={e => (e.currentTarget.src = HomeButton_D2)}
                onMouseOut={e => (e.currentTarget.src = HomeButton_D1)}
            />
            <img src={HomeButton_C1} className="HomeButton_C"
                onMouseOver={e => (e.currentTarget.src = HomeButton_C2)}
                onMouseOut={e => (e.currentTarget.src = HomeButton_C1)}
            />
        </div>
    );
}
export default Home;