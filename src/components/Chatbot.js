import React from "react";

import "./Chatbot.css";
import ChatbotPage from './images/Chat-Page.png';

function Chatbot (){
    return(
        <div>
            <img src={ChatbotPage} className="ChatbotPage" alt=""/>
        </div>
    );
}
export default Chatbot;