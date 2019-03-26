/* eslint-disable class-methods-use-this */
const SoundPlayer = require('./sound-player.js');
const MessageService = require('./message-service.js');

class Processor {
  constructor(options) {
    const self = this;
    self.delay = options.delay;
    self.messageService = new MessageService({
      queueUrl: process.argv[2],
    });
    self.soundPlayer = new SoundPlayer();
  }

  start() {
    const self = this;
    console.log('Starting');
    self.process(self);
  }

  async process(processor) {
    const self = processor;
    console.log('checking messages');
    const messages = await self.messageService.checkMessages();
    if (messages) {
      for (let i = 0; i < messages.length; i += 1) {
        const message = messages[i];
        console.log(`message retrieved ${message.Body}`);
        self.soundPlayer.say(message.Body);
        self.messageService.deleteMessage({
          receiptHandle: message.ReceiptHandle,
        });
      }
    } else {
      console.log('no messages detected');
    }
    setTimeout(self.process, self.delay, processor);
  }
}
module.exports = Processor;
