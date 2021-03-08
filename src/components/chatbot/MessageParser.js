import axios from 'axios';
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  

  parse(message) {
    console.log(message);
    const formData = new FormData();
    formData.append("text", message);
    axios.post(`http://127.0.0.1:8000/test_text/`,formData)
    .then((res) => {
      this.actionProvider.handleBotAnswer("Result is "+res.data.result)
      console.log(res)
    })
    .catch((error) => {
      this.actionProvider.handleBotAnswer("Error !!")
    })
  }
}

export default MessageParser;
