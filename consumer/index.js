const q = 'testQ';

const open = require('amqplib').connect('amqp://guest:guest@localhost:5672');

// Consumer
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
    return channel.consume(q, function(msg) {
      if (msg !== null) {
        console.log(msg.content.toString());
        channel.ack(msg);
      }
    });
  })
  .catch(console.warn);
