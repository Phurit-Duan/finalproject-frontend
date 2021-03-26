import React from "react";
import {Link} from "react-router-dom";
import "./MenuBar.css";
import "./Contact.css";
import MenuImage from './images/Menu.png';
import ContactPage from './images/Contact-Page.png';


function Contact ()
{
    return(
        <div className="Container">
            <label className="MenuBar"></label>
            <img src={MenuImage} className="MenuImage" alt="" />
            <Link to="/">
                <p className="MenuHome">Home</p>
            </Link>
            <Link to="/About-us">
                <p className="MenuAboutUs">About Us</p>
            </Link>
            <p className="P-MenuContact">Contact</p>
            <img src={ContactPage} className="ContactPage" alt="" />
        </div>
    );
}
export default Contact;