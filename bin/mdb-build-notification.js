#!/usr/bin/env node

/**
 * @copyright Matthew Bill
*/

const queueUrl = process.argv[2];
console.log(`queue url: ${queueUrl}`);

require('../src/webhost.js');
const Processor = require('../src/processor.js');

const processor = new Processor({
  delay: 20000,
  queueUrl,
});
processor.start();
