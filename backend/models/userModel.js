
const mongoose = require("mongoose");





const userSchema = new mongoose.Schema({


    profilePicture:String,
    userName:{type:String, required:true},
    email:String,
    followings:Array,
    profileBio:String,
    followers:Array,
    password:String


}) 





const userModel = new mongoose.model("multitaskinguser", userSchema)



module.exports = userModel




