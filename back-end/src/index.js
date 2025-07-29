const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const socketHandler = require('./socket');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Your React app's URL
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
  res.send('Chat Server is running');
});

socketHandler(io);

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});