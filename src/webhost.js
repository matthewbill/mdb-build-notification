const express = require('express');

const SoundPlayer = require('./sound-player.js');
const MessageService = require('./message-service.js');

const app = express();
const port = 3000;

const soundPlayer = new SoundPlayer();
const messageService = new MessageService({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/030457898068/build-notification',
});

app.get('/say', (req, res) => {
  console.log('/say endpoint called');
  const { message } = req.query;
  soundPlayer.say(message);
  res.send(`Said: ${message}`);
});


app.get('/message', (req, res) => {
  console.log('/message endpoint called');
  const { message } = req.query;
  messageService.sendMessage(message);
  res.send(`Added message to queue ${message}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
