

  const mongoose = require("mongoose");



  const usersChatRoomSchema = new mongoose.Schema({

       members:{type:Array}

  }, {timestamps:true}); 





  const usersChatRoomModel = new mongoose.model("multitaskingRoom", usersChatRoomSchema )


module.exports = usersChatRoomModel





