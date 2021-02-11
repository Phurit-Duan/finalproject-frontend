import React from "react";

import "./Chatbot.css";
import MenuBar from "./MenuBar";
import ChatbotPage from './images/Chat-Page.png';

function Chatbot (){
    return(
        <div className="Container">
            <MenuBar/>
            <img src={ChatbotPage} className="ChatbotPage" alt=""/>
        </div>
    );
}
export default Chatbot;