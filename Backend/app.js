const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const app = express()
const port = 5000
const connectToDb = require("./db/dbConnect");
const server = http.createServer(app);
const io = new Server(server); // http server passed as an arguement as socketio is built on it. 
const signUpRoute = require('./routes/signup.js');
const loginRoute = require('./routes/login.js')
var bodyParser = require('body-parser');

connectToDb(); 
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/newUser', signUpRoute); 
app.use('/userAccess' , loginRoute); 


// Socket.io connection 
io.on('connection', socket => {
    console.log('New client connected', socket.id)

    socket.on('offer', data => {
        io.to(data.target).emit('offer', { offer: data.offer, id: socket.id })
    })

    socket.on('answer', data => {
        io.to(data.target).emit('answer', data.answer)
    })

    socket.on('ice-candidate', (data) => {
        io.to(data.target).emit('ice-candidate', data.candidate)
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id)
    })
})

app.get('/' , (req ,res)=>{
    res.send("hello"); 
})

server.listen((port) , ()=>{
    console.log('running'); 
})