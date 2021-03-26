import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotAvatar from "./ChatBotAvatar";
import Options from "./Options";

const config = {
  botName: "NLP_Bot",
  initialMessages: [
    createChatBotMessage(`Please, type the word you want to test for NLP.`, {
      widget: "options",
    }),
  ],
 /* widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },],*/
  customComponents: {
    botAvatar: (props) => <ChatBotAvatar {...props} />
    }  
};

export default config;
