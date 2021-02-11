import React from "react";
import {Link } from "react-router-dom";
import  './Home.css';
import MenuImage from './images/Menu.png';
import About_Page from './images/About-Page.png';

function About_Us ()
{
    return(
        <div className="Container">
            <div className="MenuBar">
                <img src={MenuImage} className="MenuImage" alt="MenuImage" />
                <div className="MenuHome">Home</div>
                <div className="MenuAboutUs">About Us</div>
                <div className="MenuContact">Contact</div>
            </div>
            <img src={About_Page} className="About_Page"/>
        </div>
    );
}
export default About_Us;