const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Chat Server is running');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//-----------------------------

io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Join a conversation
    socket.on('join room', (room) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });
    
    // Send and receive messages
    socket.on('send message', (messageData) => {
      io.to(messageData.room).emit('receive message', messageData);
    });
    
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
});

//----Data base connection

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));