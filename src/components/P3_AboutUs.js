import React from "react";
import {Link} from "react-router-dom";

import "./MenuBar.css";
import "./P3_AboutUs.css";
import "./Footer.css";

import MenuImage from './images/Menu.svg';
import MenuImage_H from './images/Menu_H.svg';
import AboutDeveloper_1 from './images/About-Us-1.png';
import AboutDeveloper_2 from './images/About-Us-2.png';
import AboutDeveloper_3 from './images/About-Us-3.png';
import AboutAdvisor from './images/About-Advisor.jpg';


function AboutUs ()
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
                <p className="P-MenuAboutUs">About Us</p>
            <Link to="/contact">
                <p className="MenuContact">Contact</p>
            </Link>
            <div className="AboutHead">
                <h1>Developer</h1>
                <p className="AboutLineH"></p>
            </div>
            <div className="AboutDeveloper">
                <div className="AboutDeveloper_1">
                    <img src={AboutDeveloper_1} alt=""></img>
                    <h1>นางสาว อริศรา ภิรมยา</h1>
                    <p>1600900235</p>
                    <p>คณะวิศวกรรมคอมพิวเตอร์</p>
                    <p>มหาวิทยาลัยกรุงเทพ</p>
                    <h2>Miss Arissara Piromya</h2>
                    <p>1600900235</p>
                    <p>Faculty of Computer Engineering</p>
                    <p>Bangkok University</p>
                </div>
                <div className="AboutDeveloper_2">
                    <img src={AboutDeveloper_2} alt=""></img>
                    <h1>นางสาว เจียระไน ศรีชอบธรรม</h1>
                    <p>1600900516</p>
                    <p>คณะวิศวกรรมคอมพิวเตอร์</p>
                    <p>มหาวิทยาลัยกรุงเทพ</p>
                    <h2>Miss Jearanai Srishobtham</h2>
                    <p>1600900516</p>
                    <p>Faculty of Computer Engineering</p>
                    <p>Bangkok University</p>
                </div>
                <div className="AboutDeveloper_3">
                    <img src={AboutDeveloper_3} alt=""></img>
                    <h1>นาย ภูริษ ดวงมณี</h1>
                    <p>1600901852</p>
                    <p>คณะวิศวกรรมคอมพิวเตอร์</p>
                    <p>มหาวิทยาลัยกรุงเทพ</p>
                    <h2>Mr. Phurit Duangmanee</h2>
                    <p>1600901852</p>
                    <p>Faculty of Computer Engineering</p>
                    <p>Bangkok University</p>
                </div>
            </div>
            <div className="AboutAdvisor">
                <h1>Advisor</h1>
                <p className="AboutLineH"></p>
            </div>
            <div className="AboutAdvisors">
                <img src={AboutAdvisor} alt=""></img>
                <div className="AboutAdvisorsText">
                    <h1>ผศ.ดร.ปกรณ์ ยุบลโกศล</h1>
                    <p>รองคณบดีคณะวิศวกรรมศาสตร์</p>
                    <p>มหาวิทยาลัยกรุงเทพ</p>
                    <h2>Asst. Prof. Pakorn Ubolkosold</h2>
                    <p>Vice-President, Faculty of Engineering</p>
                    <p>Bangkok University</p>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;