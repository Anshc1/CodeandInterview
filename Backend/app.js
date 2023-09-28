const express = require('express')
const app = express()
const port = 5000


const connectToDb = require("./dataBaseconnection"); 
connectToDb(); 


app.get('/' , (req ,res)=>{
    res.send("hello"); 
})
app.listen((port) , ()=>{
    console.log('running'); 
})