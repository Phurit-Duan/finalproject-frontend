import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotAvatar from "./ChatBotAvatar";
import ImageUpload from "./ImageUpload";

const config = {
  botName: "NLP_Bot",
  initialMessages: [
    createChatBotMessage(`Please, type the word you want to test for NLP.`, {
      widget: "ImageUpload",
    }),
  ],
  widgets: [
    {
      widgetName: "ImageUpload",
      widgetFunc: (props) => <ImageUpload {...props} />,
    }],
  customComponents: {
    botAvatar: (props) => <ChatBotAvatar {...props} />
    }  
};

export default config;
