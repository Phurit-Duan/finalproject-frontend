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
            <div className="MenuBar">
                <img src={MenuImage} className="MenuImage" alt="" />
                <Link to="/">
                <div className="MenuHome">Home</div>
                </Link>
                <Link to="/About-us">
                    <div className="MenuAboutUs">About Us</div>
                </Link>
                <div className="P-MenuContact">Contact</div>
            </div>
            <img src={ContactPage} className="ContactPage" alt="" />
        </div>
    );
}
export default Contact;