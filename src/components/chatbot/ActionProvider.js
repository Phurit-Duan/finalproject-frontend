

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  handleBotAnswer = (answer) => {
    const message = this.createChatBotMessage(answer);
    this.addMessageToState(message);
    const clientMessage = this.createClientMessage("I'm looking for this item")
    this.setClientMessage(clientMessage)
  };

  createClientMesssage = (message) => {
    const clientMessage = {
           message: message,
           type: "user", 
           id: "somethingUnique"
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
