const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName : {String  , required : true } ,  
    lastName  :{type :  String , required : true } , 
    email : {type :  String , unique : [true ,"User With email already exist"] } ,  
    password : {type :  String , required : true } 
})

const schema = mongoose.module.users || mongoose.model("users" , userSchema);
module.exports = schema; 


