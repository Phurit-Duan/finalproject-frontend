class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  
  parse(message) {
    this.actionProvider.checkFeature(message)
  }
}
export default MessageParser;
