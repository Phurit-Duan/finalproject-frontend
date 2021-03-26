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
                <p className="MenuHome">Home</p>
            </Link>
                <p className="P-MenuAboutUs">About Us</p>
            <Link to="/Contact">
                <p className="MenuContact">Contact</p>
            </Link>
            <img src={AboutImage} className="AboutImage" alt=""/>
            <img src={AboutText} className="AboutText" alt=""/>
        </div>
    );
}
export default AboutUs;