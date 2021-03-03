import Chatbot from "react-chatbot-kit";

import "./Chatbot.css";

import MenuBar from "./MenuBar";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";


function Chatbots (){
    return(
        <div>
            <div className="ChatbotFooter"></div>
            <MenuBar/>
            <label className="ChatbotPage"></label>
            <h1 className="ChatbotHead">Chatbot</h1>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
            /> 
        </div>
    );
}
export default Chatbots;
