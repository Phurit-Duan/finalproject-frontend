import React from "react";
import { Link } from "react-router-dom";


import "./Detect.css";
import MenuBar from "./MenuBar";
import DetectBG from "./images/Detect-BG.png";
import DetectImage from "./images/Detect-Image.png";
import DetectButton_U1 from "./images/Detect-Button-U1.png";
import DetectButton_U2 from "./images/Detect-Button-U2.png";
import DetectButton_N1 from "./images/Detect-Button-N1.png";
import DetectButton_N2 from "./images/Detect-Button-N2.png";


function Detect (){
    return(
        <div>
            <MenuBar/>
            <div className="Container">
                <img src={DetectBG} className="DetectBG" alt=""/>
                <img src={DetectImage} className="DetectImage" alt=""/>
                <Link to="/Detect-Object">
                    <img src={DetectButton_U1} className="DetectButton_U" alt=""
                        onMouseOver={(e) => (e.currentTarget.src = DetectButton_U2)}
                        onMouseOut={(e) => (e.currentTarget.src = DetectButton_U1)}
                    />
                </Link>
                <Link to="/Result">
                    <img src={DetectButton_N1} className="DetectButton_N" alt=""
                        onMouseOver={(e) => (e.currentTarget.src = DetectButton_N2)}
                        onMouseOut={(e) => (e.currentTarget.src = DetectButton_N1)}
                    />
                </Link>
            </div>
        </div>
    );
}
export default Detect;