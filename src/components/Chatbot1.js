import Chatbot from "react-chatbot-kit";
import "./Chatbot1.css";

import MenuBar from "./MenuBar";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

function Chatbots (){
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
export default Chatbots;
