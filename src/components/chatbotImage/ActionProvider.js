class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBotAnswer = (answer) => {
    if(answer === 'pos'){
      const Sentiment = "คุณกำลังอารมณ์ดี (Positive)"
      const message = this.createChatBotMessage(Sentiment);
      this.addMessageToState(message);
    }
    else if(answer === 'neg'){
      const Sentiment = "คุณกำลังอารมณ์ไม่ดี (Negative)"
      const message = this.createChatBotMessage(Sentiment);
      this.addMessageToState(message);
    }
    else if(answer === 'neu'){
      const Sentiment = "อารมณ์ของคุณเป็นปกติ (Neutral)"
      const message = this.createChatBotMessage(Sentiment);
      this.addMessageToState(message);
    }
    else{
      const message = this.createChatBotMessage(answer);
      this.addMessageToState(message);
    }
  };

  handleBotFeatures = (text) => {
    if(text === 'เบเกอรี่'){
      const message = this.createChatBotMessage("คุณต้องการทำ Bakery Classification นะครับ กรุณาอัปโหลดรูปภาพ",
        {widget: "ImageUploadBakery"});
      this.addMessageToState(message);
    }
    else if(text === 'ธนบัตรไทย'){
      const message = this.createChatBotMessage("คุณต้องการทำ Thai Cash Detection นะครับ กรุณาอัปโหลดรูปภาพ",
        {widget: "ImageUploadThCash"});
      this.addMessageToState(message);
    }
    else if(text === 'พระเครื่อง'){
      const message = this.createChatBotMessage("คุณต้องการทำ Buddhist Amulet Classification นะครับ กรุณาอัปโหลดรูปภาพ",
        {widget: "ImageUploadAmulet"});
      this.addMessageToState(message);
    }
  };

  handleImage = (src, alt) => {
    const message = this.createChatBotMessage("Here's your image:",{widget: "ImageWidget"});
    this.setState(prev => ({ ...prev, messages: [...prev.messages, message], src, alt }))
  }

  createClientMesssage = (message) => {
    const clientMessage = {
           message: message,
           type: "user", 
           id: "upload-button"
    }
    return clientMessage
  }

  setClientMessage = (clientMessage) => {
    this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, clientMessage]
    }))
  }


  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}


export default ActionProvider;
