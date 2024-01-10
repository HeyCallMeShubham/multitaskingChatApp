

  const mongoose = require("mongoose");



  const usersChatRoomSchema = new mongoose.Schema({

       members:{type:Array},
       user1:{type:mongoose.Schema.Types.ObjectId, ref:"multitaskinguser"},
       user2:{type:mongoose.Schema.Types.ObjectId, ref:"multitaskinguser"}

  }, {timestamps:true}); 





  const usersChatRoomModel = new mongoose.model("multitaskingRoom", usersChatRoomSchema )


module.exports = usersChatRoomModel





