// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();
app.use(bodyParser.json());

// Message queue array to store messages
const messageQueue = [];

// Endpoint to enqueue a message
app.post('/enqueue', (req, res) => {
    console.log(req.body);
  const message = req.body.message;
  console.log(message);
  messageQueue.push(message);
  res.send('Message enqueued successfully!');
});

// Endpoint to dequeue a message
app.get('/dequeue', (req, res) => {
  if (messageQueue.length === 0) {
    res.send('Message queue is empty!');
  } else {
    const message = messageQueue.shift();
    res.send(`Dequeued message: ${message}`);
  }
});

// Endpoint to get the size of the message queue
app.get('/size', (req, res) => {
  const size = messageQueue.length;
  res.send(`Message queue size: ${size}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Message Queue server is running on port ${PORT}`);
});
