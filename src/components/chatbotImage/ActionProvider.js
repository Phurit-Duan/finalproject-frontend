import axios from 'axios';
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;

  }
  handleBotAnswer = (answer) => {
      const message = this.createChatBotMessage(answer);
      this.addMessageToState(message);
  };

  checkFeature = (message) => {
    this.setState(state => {
      if (!state.sentiment) {
        if(message === 'เบเกอรี่' || message === 'ธนบัตรไทย' || message === 'พระเครื่อง'){
          this.handleBotFeatures(message)
          this.setStateSentiment(false)
        }
        else if(message === 'ความรู้สึก'){
          this.handleBotAnswer("คุณต้องการทำ Sentiment นะครับ กรุณาข้อความเพื่อวัดระดับความรู้สึกของคุณ และหากคุณต้องการกลับไปที่เมนู กรุณาพิมพ์ว่า กลับเมนู ")
          
        }
        else{
          this.handleBotAnswer("คุณพิมพ์ผิดหรือเปล่านะ ?")
          this.setStateSentiment(false)
        }
      }
      else{
        if(message === 'กลับเมนู'){
          this.handleBotAnswer("คุณกลับมาเมนูของข้อความแล้ว ! กรุณาพิมพ์ข้อความตามที่กำหนด ได้แก่ เบเกอรี่, ธนบัตรไทย, พระเครื่อง และ ความรู้สึก เพื่อใช้งานหัวข้อต่าง ๆ")
          this.setStateSentiment(false)
        }
        else {
          const formData = new FormData();
          formData.append("text", message);
          axios.post(`http://35.247.150.245:8000/buai-nlp-sentiment-chatbot/`,formData)
          .then((res) => {
            this.handleBotSentiment(res.data.result)
          })
          .catch((error) => {
            this.handleBotAnswer("เกิดข้อผิดพลาด")
          })
        }
      }
      return state
    })
  }

  handleBotFeatures = (text) => {
    if(text === 'เบเกอรี่'){
      const message = this.createChatBotMessage("คุณต้องการทำ Bakery Classification นะครับ กรุณาอัปโหลดรูปภาพ",
        {widget: "ImageUploadBakery"});
      this.addMessageToState(message);
    }
    else if(text === 'ธนบัตรไทย'){
      const message = this.createChatBotMessage("คุณต้องการทำ Thai Banknotes Detection นะครับ กรุณาอัปโหลดรูปภาพ",
        {widget: "ImageUploadThCash"});
      this.addMessageToState(message);
    }
    else if(text === 'พระเครื่อง'){
      const message = this.createChatBotMessage("คุณต้องการทำ Amulet Classification นะครับ กรุณาอัปโหลดรูปภาพ",
        {widget: "ImageUploadAmulet"});
      this.addMessageToState(message);
    }
  };

  handleBotSentiment = (answer) => {
    if(answer === 'pos'){
      const Sentiment = "คุณกำลังความรู้สึกดี (Positive)"
      const message = this.createChatBotMessage(Sentiment);
      this.addMessageToState(message);
    }
    else if(answer === 'neg'){
      const Sentiment = "คุณกำลังความรู้สึกไม่ดี (Negative)"
      const message = this.createChatBotMessage(Sentiment);
      this.addMessageToState(message);
    }
    else if(answer === 'neu'){
      const Sentiment = "ความรู้สึกของคุณเป็นปกติ (Neutral)"
      const message = this.createChatBotMessage(Sentiment);
      this.addMessageToState(message);
    }
    else{
      const message = this.createChatBotMessage(answer);
      this.addMessageToState(message);
    }
  };

  createClientMesssage = (message) => {
    const clientMessage = {
           message: message,
           type: "user", 
           id: "upload-button"
    }
    return clientMessage
  }

  setStateSentiment = (sentiment) => {
    this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages],sentiment
    }))
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
