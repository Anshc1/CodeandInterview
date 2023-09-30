const express = require('express');
const router = express.Router();
const users = require('../Models/userSchema');
const jwt = require('jsonwebtoken'); 

router.post('/login', (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    users.find({userName : userName}).then((userData)=>{
        if(userData.length === 0 ){
            res.status(200).json({msg : "user does not exist" })
        }else if(userData[0].password === password){   
            const secretToken = "MY SECRET KEY-> to be replaced in env.variable"
            const accesstoken = jwt.sign({
                userName: userName, 
                email : userData[0].email,  
                userId : userData[0]._id 
            } , secretToken , {expiresIn : '1h'}); 
            res.status(200).json({msg : "user logged in" , token : accesstoken} ); 
        }else{
            res.status(300).json({msg : "password incorrect..."});  
        }
    }).catch((err)=>{
        res.status(500).json({err : err} ); 
       console.log(err);
    })
})

module.exports = router; 