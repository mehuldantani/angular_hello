const messageStructure = require('./utils/message.js');
const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const bot = 'Web-chat';

//bring our static files to this server
app.use(express.static(path.join(__dirname,'html_css')));

//to be executed when users connects

io.on('connection',socket =>{

//notifies that user is connected
socket.emit('message',messageStructure(bot,'you are connected.'));

//notifies others that new users is connected now
socket.broadcast.emit('message',messageStructure(bot,'A is connected now.'));

//when user got disconnected
socket.on('disconnect',()=> {
    io.emit('message',messageStructure(bot,'A is disconnected.'));
});


//listen to incoming messages
socket.on('chat-msg',msg =>{
io.emit('message',messageStructure('USER','you are connected.'));
})

});





const port = 5500 || process.env.port;

server.listen(port, ()=>
    console.log(`Server is running on ${port}`));
