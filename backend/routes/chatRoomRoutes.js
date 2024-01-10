

const express = require("express");
const {getChatRoom, getCurrentUserChatRooms,} = require("../controllers/chatRoomsController");
 


const chatRoomRouter = express.Router();



 

chatRoomRouter.post("/getUsersChatRoom/:member1/:member2", getChatRoom);

chatRoomRouter.get("/getcurrentuserchatrooms/:userId", getCurrentUserChatRooms);
 


module.exports = chatRoomRouter




