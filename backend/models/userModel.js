
const mongoose = require("mongoose");





const userSchema = new mongoose.Schema({


    userName:{type:String, required:true},
    email:String,

    password:String


}) 





const userModel = new mongoose.model("multitaskinguser", userSchema)



module.exports = userModel




