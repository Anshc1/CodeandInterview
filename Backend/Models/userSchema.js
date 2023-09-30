const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName :{type :String , required : true},  
    email : {type :  String , unique : [true ,"User With email already exist"] } ,  
    password : {type :  String , required : true } 
})

const schema = mongoose.models.users || mongoose.model("users" , userSchema);
module.exports = schema; 


