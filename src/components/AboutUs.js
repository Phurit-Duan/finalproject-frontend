import React from "react";
import {Link} from "react-router-dom";
import "./MenuBar.css";
import  "./AboutUs.css";
import MenuImage from './images/Menu.png';
import AboutImage from './images/About-Image.png';
import AboutText from './images/About-Text.png';

function AboutUs ()
{
    return(
        <div className="Container">
            <label className="MenuBar"></label>
            <img src={MenuImage} className="MenuImage" alt="" />
            <Link to="/">
                <div className="MenuHome">Home</div>
            </Link>
                <div className="P-MenuAboutUs">About Us</div>
            <Link to="/Contact">
                <div className="MenuContact">Contact</div>
            </Link>
            <img src={AboutImage} className="AboutImage" alt=""/>
            <img src={AboutText} className="AboutText" alt=""/>
        </div>
    );
}
export default AboutUs;