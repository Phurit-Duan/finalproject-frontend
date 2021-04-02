import Chatbot from "react-chatbot-kit";
import "./Chatbot.css";

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
            <div className="ChatbotFooter"></div>
            <MenuBar/>
            <label className="ChatbotPage"></label>
            <h1 className="ChatbotHead">Chatbot</h1>
            <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                validator={validator}
            /> 
        </div>
        
    );
}
export default ChatbotImage;
