import React from "react";

import { ReactComponent as ChatBotIcon } from "../images/Chatbot-Avatar.svg";

const ChatBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <ChatBotIcon className="react-chatbot-kit-chat-bot-avatar-icon" />
      </div>
    </div>
  );
};

export default ChatBotAvatar;