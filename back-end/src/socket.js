module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id,);

        socket.on('join_room', (room) => {
            console.log('<<<<<<<<<<>>>>.');
            
            socket.join(room);
            console.log(`User ${socket.id} joined room ${room}`);
        });

        socket.on('send_message', (data) => {
            console.log(data,'<<<<<<<<<<<,');
            
            io.to(data.room).emit('receive_message', data);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });
};