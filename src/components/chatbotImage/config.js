import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotAvatar from "./ChatBotAvatar";
import ImageUploadBakery from "./ImageUploadBakery";
import ImageUploadThCash from "./ImageUploadThCash";
import ImageUploadAmulet from "./ImageUploadAmulet";
const config = {
  state: {
    sentiment: false
  },
  botName: "Inclusive Bot",
  initialMessages: [
    createChatBotMessage(`สวัสดีครับ ผมคือ Inclusive bot ที่มีหลาย Features รวมอยู่ในตัว หากคุณต้องการใช้งาน Feature กรุณาพิมพ์ข้อความตามที่กำหนด ได้แก่ เบเกอรี่, ธนบัตรไทย, พระเครื่อง และ อารมณ์`, {
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
