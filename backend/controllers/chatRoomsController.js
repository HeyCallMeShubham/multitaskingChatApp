const userModel = require("../models/userModel");
const usersChatRoomModel = require("../models/usersChatRoom");







const createChatRoom = async (req, res) => {

  try {


    const newChat = new usersChatRoomModel({

      members: [req.body.member1, req.body.member2]

    })


    const result = await newChat.save();


    res.status(200).json(result);


  } catch (err) {

    console.log(err)

  }

};










const getChatRoom = async (req, res) => {

    console.log(req.params);

  try {


    const chatRoom = await usersChatRoomModel.findOne({

    members: {$all:[req.params.member1, req.params.member2] }

    });

 
    
    
    if (chatRoom) return res.status(200).json(chatRoom);


    const createdChatRoom = await usersChatRoomModel.create({

      members:[req.params.member1, req.params.member2],
      user1:req.params.member1,
      user2:req.params.member2

    });


   


    res.status(200).json(createChatRoom)

    console.log("chat room created");


  } catch (err) {

    console.log(err)

  }


};









const getCurrentUserChatRooms = async (req, res) => {

  try {

    const userAllChatRooms = await usersChatRoomModel.find({
      
      members:{$in:[req.params.userId]}

    });

    const conversationData = await Promise.all(userAllChatRooms.map(async(conversation) =>{
     
      const receiverId = conversation.members.find((member) => member !== req.params.userId)
      
      return await userModel.findById(receiverId);

    }));



    console.log(conversationData, 'conversationdata');



    if(userAllChatRooms && userAllChatRooms){

      res.status(200).json(conversationData)

    }else{
      
     console.log(`sorry no chatRooms found`)

    }



  } catch (err) {

    console.log(err)

  }


}












module.exports = {

  createChatRoom,
  getChatRoom,
  getCurrentUserChatRooms


}









