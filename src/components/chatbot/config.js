import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotAvatar from "./ChatBotAvatar";

const config = {
  botName: "NLP_Bot",
  initialMessages: [
    createChatBotMessage(`Please, type the word you want to test for NLP.`, {
    })
  ],
  customComponents: {
    botAvatar: (props) => <ChatBotAvatar {...props} />
    }  
};

export default config;
