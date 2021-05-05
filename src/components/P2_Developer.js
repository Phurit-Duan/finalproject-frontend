import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Link} from "react-router-dom";

import "./MenuBar.css";
import "./P2_Developer.css";
import "./Footer.css";

import Info_1 from "./images/Information_1.svg";
import Info_2 from "./images/Information_2.svg";
import MenuImage from './images/Menu.svg';
import MenuImage_H from './images/Menu_H.svg';

function Developer ()
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
                <p className="P-MenuDevelope">API</p>
            <Link to="/about-us">
                <p className="MenuAboutUs">About Us</p>
            </Link>
            <Link to="/contact">
                <p className="MenuContact">Contact</p>
            </Link>
            <div className="DeveloperHead">
                <h1>Open API For Developer</h1>
                <p className="DeveloperLineH"></p>
            </div>
            <div className="DeveloperContainer">
                <div className="DeveloperAPI">
                    <Popup trigger={<img src={Info_1} alt="" className="DeveloperInfoButton" 
                        onMouseOver={(e) => (e.currentTarget.src = Info_2)} 
                        onMouseOut ={(e) => (e.currentTarget.src = Info_1)}/>} 
                        position="right top">
                        <div className="DeveloperInfoContainer1">
                            <h1 className="DeveloperInfoHead">Bakery Classification API</h1>
                            <div className="DeveloperInfoText">
                                <h2>Request Data</h2>
                                <p>Medthod&nbsp;&nbsp;:&nbsp;&nbsp;Post</p>
                                <p>Key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;"image"</p>
                                <p>value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;object (.jpg)</p>
                                <h2>response Data</h2>
                                <p>Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;json</p>
                            </div>
                        </div>
                    </Popup>
                    <h1>Bakery Classification API : </h1>
                    <p>http://35.247.150.245:8000/buai-bakery-process-image/</p>
                    <Popup trigger={<img src={Info_1} alt="" className="DeveloperInfoButton" 
                        onMouseOver={(e) => (e.currentTarget.src = Info_2)} 
                        onMouseOut ={(e) => (e.currentTarget.src = Info_1)}/>} 
                        position="right center">
                        <div className="DeveloperInfoContainer2">
                            <h1 className="DeveloperInfoHead">Thai Cash Detection API</h1>
                            <div className="DeveloperInfoText">
                                <h2>Request Data</h2>
                                <p>Medthod&nbsp;&nbsp;:&nbsp;&nbsp;Post</p>
                                <p>Key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;"image"</p>
                                <p>value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;object (.jpg)</p>
                                <h2>response Data</h2>
                                <p>Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;json</p>
                            </div>
                        </div>
                    </Popup>
                    <h1>Thai Cash Detection API : </h1>
                    <p>http://35.247.150.245:8000/buai-thaicash-process-image/</p>
                    <Popup trigger={<img src={Info_1} alt="" className="DeveloperInfoButton" 
                        onMouseOver={(e) => (e.currentTarget.src = Info_2)} 
                        onMouseOut ={(e) => (e.currentTarget.src = Info_1)}/>} 
                        position="right center">
                        <div className="DeveloperInfoContainer3">
                            <h1 className="DeveloperInfoHead">Buddhist Amulet Classification API</h1>
                            <div className="DeveloperInfoText">
                                <h2>Request Data</h2>
                                <p>Medthod&nbsp;&nbsp;:&nbsp;&nbsp;Post</p>
                                <p>Key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;"image"</p>
                                <p>value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;object (.jpg)</p>
                                <h2>response Data</h2>
                                <p>Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;json</p>
                            </div>
                        </div>
                    </Popup>
                    <h1>Buddhist Amulet Classification API : </h1>
                    <p>http://35.247.150.245:8000/buai-amulet-process-image/</p>
                    <Popup trigger={<img src={Info_1} alt="" className="DeveloperInfoButton" 
                        onMouseOver={(e) => (e.currentTarget.src = Info_2)} 
                        onMouseOut ={(e) => (e.currentTarget.src = Info_1)}/>} 
                        position="right bottom">
                        <div className="DeveloperInfoContainer4">
                            <h1 className="DeveloperInfoHead">Thai Cash Detection API</h1>
                            <div className="DeveloperInfoText">
                                <h2>Request Data</h2>
                                <p>Medthod&nbsp;&nbsp;:&nbsp;&nbsp;Post</p>
                                <p>Key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;"text"</p>
                                <p>value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;string</p>
                                <h2>response Data</h2>
                                <p>Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;json</p>
                            </div>
                        </div>
                    </Popup>
                    <h1>Sentiment Analysis Chatbot API : </h1>
                    <p>http://35.247.150.245:8000/buai-nlp-sentiment-chatbot/</p>
                </div>
            </div>
            <div className="Footer-HD">
            <div className="Footer">
                <h1>Developed by</h1>
                <p>- Faculty of Engineering, Bangkok University</p>
                <div>- Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            </div>
        </div>

    );
}
export default Developer;