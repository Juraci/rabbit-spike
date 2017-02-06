var q = 'testQ';

var open = require('amqplib').connect('amqp://guest:guest@localhost:5672');

// Publisher
let channel;

open
  .then(function(conn) {
    return conn.createChannel();
  })
  .then(function(ch) {
    channel = ch;
    return channel.assertQueue(q);
  })
  .then(function(ok) {
    for(let i = 0; i <= 1000000; i++) {
      setTimeout(() => {
        channel.sendToQueue(q, new Buffer(`something to do ${i}`))
      }, 1000);
    }
  })
  .catch(console.warn);
