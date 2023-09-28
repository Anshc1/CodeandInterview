const express = require('express');
const router = express.Router();
const users = require('../Models/userSchema');
const jwt = require('jsonwebtoken'); 

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    users.find({email : email}).then((userData)=>{
        if(userData.password === password){
            const accesstoken = jwt.sign({
                email : email , 
                userId : "PRAJWAL" ,
            } , 'PRAJWAL' , {expiresIn : '1h'}); 
            res.status(200).json({msg : "user registered" , token : accesstoken} ); 
        }else{
            res.status(200).json({msg : "password incorrect..."});  
        }
    }).catch((err)=>{
        res.status(500).json({err : err} ); 
        console.log(err);
    })
    console.log(req);
})

