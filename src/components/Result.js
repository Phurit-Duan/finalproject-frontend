import React from "react";

import "./Result.css";
import MenuBar from "./MenuBar";
import ResultBG from "./images/Result-BG.png"
import ResultImage from "./images/Result-Image.png"


function Result (){
    return(
        <div className="Container">
            <MenuBar/>
            <img src={ResultBG} className="ResultBG" alt=""/>
            <img src={ResultImage} className="ResultImage" alt=""/>
            <div className="ResultText" ><p>Result is ...</p></div>           
        </div>
    );
}
export default Result;