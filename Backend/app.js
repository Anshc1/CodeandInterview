const express = require('express')
const app = express()
const port = 5000
<<<<<<< HEAD
const cors = require('cors')
const http = require('http')
const connectToDb = require("./dataBaseconnection"); 
=======


const connectToDb = require("./db/dbConnect"); 
connectToDb(); 
>>>>>>> 7d0e134ea95c9e5961842512c33eb5c6ca91ff51

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