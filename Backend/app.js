const express = require('express')
const cors = require('cors')
const http = require('http')
const app = express()
const port = 5000
const connectToDb = require("./db/dbConnect");
const server = http.createServer(app); 
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

app.get('/' , (req ,res)=>{
    res.send("hello"); 
})

server.listen((port) , ()=>{
    console.log('running'); 
})