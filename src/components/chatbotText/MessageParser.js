import axios from 'axios';
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  
  parse(message) {
    console.log(message);
    const formData = new FormData();
    formData.append("text", message);
    axios.post(`http://35.247.150.245:8000/buai-nlp-sentiment-chatbot/`,formData)
    .then((res) => {
      this.actionProvider.handleBotAnswer(res.data.result)
    })
    .catch((error) => {
      this.actionProvider.handleBotAnswer("เกิดข้อผิดพลาด")
    })
  }
}
export default MessageParser;
