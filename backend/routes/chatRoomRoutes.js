

const express = require("express");
const {   getChatRoom } = require("../controllers/chatRoomsController");
 


const chatRoomRouter = express.Router();



 

chatRoomRouter.post("/getUsersChatRoom/:member1/:member2", getChatRoom)
 


module.exports = chatRoomRouter




