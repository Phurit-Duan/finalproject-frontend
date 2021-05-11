import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotAvatar from "./ChatBotAvatar";
import ImageUploadBakery from "./ImageUploadBakery";
import ImageUploadThCash from "./ImageUploadThCash";
import ImageUploadAmulet from "./ImageUploadAmulet";
const config = {
  state: {
    sentiment: false
  },
  botName: "Multifunctional Bot",
  initialMessages: [
    createChatBotMessage(`สวัสดีครับ ผมคือ Multifunctional bot ที่มีทุกหัวข้อรวมอยู่ในตัว หากคุณต้องการใช้งานหัวข้อต่าง ๆ กรุณาพิมพ์ข้อความตามที่กำหนด ได้แก่ เบเกอรี่, ธนบัตรไทย, พระเครื่อง และ ความรู้สึก`, {
    })
  ],
  widgets: [
    {
      widgetName: "ImageUploadBakery",
      widgetFunc: (props) => <ImageUploadBakery {...props} />,
    },
    {
      widgetName: "ImageUploadThCash",
      widgetFunc: (props) => <ImageUploadThCash {...props} />,
    },
    {
      widgetName: "ImageUploadAmulet",
      widgetFunc: (props) => <ImageUploadAmulet {...props} />,
    }
  ],
  customComponents: {
    botAvatar: (props) => <ChatBotAvatar {...props} />
  }  
};

export default config;
