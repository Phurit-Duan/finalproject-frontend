import axios from 'axios';
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  
  parse(message) {
    if(message === 'เบเกอรี่' || message === 'ธนบัตรไทย' || message === 'พระเครื่อง'){
      this.actionProvider.handleBotFeatures(message)
    }
    else{
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
}
export default MessageParser;
