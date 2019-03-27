#!/usr/bin/env node

/**
 * @copyright Matthew Bill
*/

const queueUrl = process.argv[2];
let pollDelay = process.argv[3];

if (!pollDelay) {
  pollDelay = 2000;
}

console.log(`queue url: ${queueUrl}`);
console.log(`poll delay: ${pollDelay}`);

require('../src/webhost.js');
const Processor = require('../src/processor.js');

const processor = new Processor({
  pollDelay,
  queueUrl,
});
processor.start();
