import { uuid } from 'uuidv4';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  handleBotAnswer = (answer) => {
    const message = this.createChatBotMessage(answer);
    this.addMessageToState(message);
  };

  createClientMesssage = (message) => {
    const clientMessage = {
           message: message,
           type: "user", 
           id: {uuid}
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
