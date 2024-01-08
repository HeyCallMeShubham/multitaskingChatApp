

const mongoose = require("mongoose");




const MessageSchema = new mongoose.Schema({

  chatRoomId:{type:String, required:true},
  senderId:{type:String, required:true},
  receiverId:{type:String, required:true},
  text:{type:String, required:true}


})




const MessageModel = new mongoose.model("multitaskingmessages", MessageSchema) 



module.exports = MessageModel

















