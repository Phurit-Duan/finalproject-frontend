import React from "react";
import {Link} from "react-router-dom";

import "./MenuBar.css";
import "./P4_Contact.css";

import MenuImage from './images/Menu.png';
import MenuImage_H from './images/Menu_H.png';
import AboutDeveloper_1 from './images/About-Us-1.png';
import AboutDeveloper_2 from './images/About-Us-2.png';
import AboutDeveloper_3 from './images/About-Us-3.png';


function Contact ()
{
    return(
        <div className="Container">
            <label className="MenuBar"></label>
            <Link to="/">
                <img src={MenuImage} className="MenuImage" alt="MenuImage" 
                onMouseOver={(e) => (e.currentTarget.src = MenuImage_H)}
                onMouseOut={(e) => (e.currentTarget.src = MenuImage)} />
                <p className="MenuHome">Home</p>
            </Link>
            <Link to="/api-for-developer">
                <p className="MenuDevelope">API</p>
            </Link>
            <Link to="/about-us">
                <p className="MenuAboutUs">About Us</p>
            </Link>
            <p className="P-MenuContact">Contact</p>
            <div className="ContactHead">
                <h1>Contact</h1>
                <p className="ContactLineH"></p>
            </div>
            <div className="ContactDeveloper">
                <div className="ContactDeveloper_1">
                    <img src={AboutDeveloper_1} alt=""></img>
                    <h1>นางสาว อริศรา ภิรมยา</h1>
                    <p>Email : arissara.piro@bumail.net</p>
                </div>
                <div className="ContactDeveloper_2">
                    <img src={AboutDeveloper_2} alt=""></img>
                    <h1>นางสาว เจียระไน ศรีชอบธรรม</h1>
                    <p>Email : jearanai.sris@bumail.net</p>
                </div>
                <div className="ContactDeveloper_3">
                    <img src={AboutDeveloper_3} alt=""></img>
                    <h1>นาย ภูริษ ดวงมณี</h1>
                    <p>Email : phurit.duan@bumail.net</p>
                </div>
            </div>
        </div>   
    );
}
export default Contact;