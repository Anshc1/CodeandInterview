const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const http = require('http')
const connectToDb = require("./dataBaseconnection"); 

app.use(cors()); 
const server = http.createServer(app); 
connectToDb(); 

app.get('/' , (req ,res)=>{
    res.send("hello"); 
})
app.use('./routes/login');
app.use('./routes/signup');

server.listen((port) , ()=>{
    console.log('running'); 
})