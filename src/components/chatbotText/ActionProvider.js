
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  handleBotAnswer = (answer) => {
    console.log(answer)
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

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}


export default ActionProvider;
