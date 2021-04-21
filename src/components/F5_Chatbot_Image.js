import Chatbot from "react-chatbot-kit";
import Popup from 'reactjs-popup';
import React from "react";

import "./F_Chatbot.css";
import "./Footer.css";

import MenuBar from "./MenuBar";
import Info_1 from "./images/Information_1.svg";
import Info_2 from "./images/Information_2.svg";
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
                <Popup trigger={<img src={Info_1} alt="" className="ChatbotInfoButton" 
                    onMouseOver={(e) => (e.currentTarget.src = Info_2)} 
                    onMouseOut ={(e) => (e.currentTarget.src = Info_1)}/>} 
                    position="left top">
                    <div className="ChatbotInfoContainer">
                        <h1 className="ChatbotInfoHead">Sentiment Chatbot</h1>
                        <div className="ChatbotInfoText">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            คือ Feature ที่รวบรวมแต่ละ Feature เข้าไว้ด้วยกันโดยแสดงออกมาเป็นรูปแบบของ ChatBot มี Feature ดังนี้ Sentiment Chatbot,
                            Thai Cash Detection, Bakery Classification และ Buddhist Amulet Classification
                        </div>
                    </div>
                </Popup>
                <p className="ChatbotLineH"></p>
            </div>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                validator={validator}
            />
            <div className="Footer">
                <h1>Supported by</h1>
                <p>- Faculty of Engineering, Bangkok University</p>
                <div>- Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>
        
    );
}
export default ChatbotImage;
