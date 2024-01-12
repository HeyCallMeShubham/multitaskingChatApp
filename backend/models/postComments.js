
const mongoose = require("mongoose");





  const postCommentsSchema = new mongoose.Schema({

    postId:{type:mongoose.Schema.Types.ObjectId, ref:"multitaskingpost", required:true},
    userName:String,
    commentByUser:{type:mongoose.Schema.Types.ObjectId, ref:"multitaskinguser"},
    commentContent:String,
    commentLikes:Array,
    replies:[{
     
      username:String,
      commentId:{type:mongoose.Types.ObjectId},
      reply:{

         type:String

      },
      createdAt:{

        type:Date,
        default:new Date().getTime()

      }


    }]


  }, {timestamps:true})





const postCommentModel = new mongoose.model("multitaskingpostsComment", postCommentsSchema)

module.exports = postCommentModel




