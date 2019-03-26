const { SqsWrapper } = require('mdb-datastores');

class MessageService {
  constructor(options) {
    const self = this;
    self.queueUrl = options.queueUrl;
    self.sqsWrapper = new SqsWrapper({
      region: 'us-east1',
    });
  }

  async sendMessage(message) {
    const self = this;
    await self.sqsWrapper.sendMessage({
      messageBody: message,
      queueUrl: self.queueUrl,
    });
  }

  async checkMessages() {
    const self = this;
    try {
      const result = await self.sqsWrapper.receiveMessage({
        queueUrl: self.queueUrl,
      });
      const messages = result.Messages;
      return messages;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteMessage(options) {
    const self = this;
    try {
      const result = await self.sqsWrapper.deleteMessage({
        queueUrl: self.queueUrl,
        receiptHandle: options.receiptHandle,
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = MessageService;
