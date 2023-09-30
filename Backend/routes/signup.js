const express = require('express');
const router = express.Router();
const users = require('../Models/userSchema');

router.post('/sighnUp', (req, res) => {
    console.log(req.body);
    const userName =  req.body.userName; 
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new users({
        userName , 
        email,
        password,
    })
    newUser.save().then(()=>{
        res.status(200).json({msg : "user registered"} ); 
    }).catch((err)=>{
        res.status(500).json({err : "err"} ); 
    })
})

module.exports = router;
