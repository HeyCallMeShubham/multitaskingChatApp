

const express = require("express");
const { getConversationsbyChatRoomId } = require("../controllers/messageController");
 

const messagesRouter = express.Router();



 

messagesRouter.get("/getroomconversations/:chatroomid", getConversationsbyChatRoomId)
 


module.exports = messagesRouter




