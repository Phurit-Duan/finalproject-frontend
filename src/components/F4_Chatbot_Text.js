import Chatbot from "react-chatbot-kit";
import React from "react";

import "./F_Chatbot.css";
import "./Footer.css";

import MenuBar from "./MenuBar";
import config from "./chatbotText/config";
import ActionProvider from "./chatbotText/ActionProvider";
import MessageParser from "./chatbotText/MessageParser";

function ChatbotText (){
    const validator = (input) => {
        if (input.length > 0) return true;
        return false
    }

    return(
        <div>
            <MenuBar/>
            <div className="ChatbotHead">
                <h1>Sentiment Chatbot</h1>
                <p className="ChatbotLineH"></p>
            </div>
            <div className="ChatbotInfoContainer">
                <h1 className="ChatbotInfoHead">Sentiment Chatbot</h1>
                <div className="ChatbotInfoText">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    คือ Feature ที่ใช้ Natural Language Processing (NLP) ในการวิเคราะห์อารมณ์ของผู้ใช้จากข้อความ 
                    ซึ่งแบ่งเป็นทั้งหมด 3 อารมณ์ ได้แก่ อารมณ์ดี (Positive), อารมณ์ไม่ดี (์Negative) และปกติ (Neutral)
                </div>
            </div>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                validator={validator}
            /> 
            <div className="Footer-CH">
            <div className="Footer">
                <h1>Supported by</h1>
                <p>- Faculty of Engineering, Bangkok University</p>
                <div>- The icon "Magnify" is provided by <a href="https://loading.io/icon/" title="Freepik">loading.io</a></div>
                <div>- Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            </div>
        </div>
        
    );
}
export default ChatbotText;
