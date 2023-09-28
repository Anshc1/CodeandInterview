const express = require('express');
const router = express.Router();
const users = require('../Models/userSchema');

router.post('/sighnUp', (req, res) => {
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new users({
        firstname: fname,
        lastname: lname,
        email: email,
        password: password,
    })
    newUser.save().then(()=>{
        res.status(200).json({msg : "user registered"} ); 
    }).catch((err)=>{
        res.status(500).json({err : err} ); 
        console.log(err);
    })
    console.log(req);
})

