import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotAvatar from "./ChatBotAvatar";

const config = {
  botName: "Sentiment Chatbot",
  initialMessages: [
    createChatBotMessage(`สวัสดีครับ ผมคือ Sentiment bot ที่จะมาวิเคราะห์อารมณ์ของคุณผ่านข้อความนะครับ กรุณาส่งข้อความ`, {
    }),
  ],
  customComponents: {
    botAvatar: (props) => <ChatBotAvatar {...props} />
    }  
};

export default config;
