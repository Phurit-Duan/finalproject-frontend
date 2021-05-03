import Chatbot from "react-chatbot-kit";
import React from "react";

import "./F_Chatbot.css";
import "./Footer.css";

import MenuBar from "./MenuBar";
import config from "./chatbotImage/config";
import ActionProvider from "./chatbotImage/ActionProvider";
import MessageParser from "./chatbotImage/MessageParser";

function ChatbotImage (){
    const validator = (input) => {
        if (input.length > 0) return true;
        return false
    }

    return(
        <div>
            <MenuBar/>
            <div className="ChatbotHead">
                <h1>Inclusive Chatbot</h1>
                <p className="ChatbotLineH"></p>
            </div>
            <div className="ChatbotInfoContainer">
                <h1 className="ChatbotInfoHead">Sentiment Chatbot</h1>
                <div className="ChatbotInfoText">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    คือการรวบรวมทุกหัวข้อเข้าไว้ด้วยกันโดยแสดงออกมาเป็นรูปแบบของ ChatBot โดยมีหัวข้อดังนี้ Sentiment Chatbot,
                    Thai Cash Detection, Bakery Classification และ Buddhist Amulet Classification
                </div>
            </div>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                validator={validator}
            />
            <div className="Footer-Ch">
            <div className="Footer">
                <h1>Developed by</h1>
                <p>- Faculty of Engineering, Bangkok University</p>
                <div>- The icon "Magnify" is provided by <a href="https://loading.io/icon/" title="Freepik">loading.io</a></div>
                <div>- Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            </div>
        </div>
        
    );
}
export default ChatbotImage;
