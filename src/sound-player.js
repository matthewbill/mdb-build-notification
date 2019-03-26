/* eslint-disable class-methods-use-this */
const say = require('say');

class SoundPlayer {
  say(speech) {
    say.speak(speech);
  }
}

module.exports = SoundPlayer;
