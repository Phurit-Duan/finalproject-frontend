import Chatbot from "react-chatbot-kit";
import "./Chatbot.css";

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
export default ChatbotText;
