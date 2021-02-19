import React from "react";
import { Link } from "react-router-dom";

import "./Detect.css";
import DetectBG from "./images/Detect-BG.png";
import DetectImage from "./images/Detect-Image.png";
import DetectUpload from "./DetectUpload";
import DetectButton_U1 from "./images/Detect-Button-U3.png";


function Detect (){
    return(
        <div className="Detect">
            <img src={DetectBG} className="DetectBG" alt=""/>
            <img src={DetectImage} className="DetectImage" alt=""/>
            <img src={DetectButton_U1} className="DetectButton_U" alt=""/>
            <DetectUpload />
            
        </div>
    );
}
export default Detect;