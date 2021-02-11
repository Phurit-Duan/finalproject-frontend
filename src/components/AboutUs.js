import React from "react";
import {Link} from "react-router-dom";
import  './AboutUs.css';
import MenuImage from './images/Menu.png';
import AboutImage from './images/About-Image.png';
import AboutText from './images/About-Text.png';

function AboutUs ()
{
    return(
        <div className="Container">
            <div className="MenuBar">
                <img src={MenuImage} className="MenuImage" alt="" />
                <Link to="/">
                    <div className="MenuHome">Home</div>
                </Link>
                <div className="P-MenuAboutUs">About Us</div>
                <Link to="/Contact">
                    <div className="MenuContact">Contact</div>
                </Link>
            </div>
            <img src={AboutImage} className="AboutImage" alt=""/>
            <img src={AboutText} className="AboutText" alt=""/>
        </div>
    );
}
export default AboutUs;