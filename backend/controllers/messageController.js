const MessageModel = require("../models/messageModel")



   const getConversationsbyChatRoomId = async(req, res) =>{

    console.log(req.params.chatroomid, 'req. params')

    try{

        const conversation = await MessageModel.find({chatRoomId:req.params.chatroomid})

        console.log(conversation);

        res.status(200).json(conversation)

    }catch(err){

     console.log(err)

    }


   }

  




module.exports = {

  getConversationsbyChatRoomId  

}









