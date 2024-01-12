const postCommentModel = require("../models/postComments")










const addComment = async(req, res) =>{

   try{
    
    const comment = await postCommentModel.create({

        
        postId:"65a02f24a65f34c6b6240d6d",
        userName:"shubhamkumar",
        commentByUser:"659ae509409bbff55b4186aa",
        commentContent:"dream car wow"
    
         
    });

    res.status(200).json(comment);


   }catch(err){
  
    console.log(err)

   }

}





const getPostComments = async(req, res) =>{

 

   try{
    
    const postComments = await postCommentModel.find({postId:req.params.postId});

    res.status(200).json(postComments);


   }catch(err){
  
    console.log(err)

   }

}


const addRepliesToComments = async(req, res) =>{

   try{

      const reply = {
     
         commentId:req.params.commentId,
         userName:req.body.username,
         reply:req.body.reply

      };
    

    const commentReply = await postCommentModel.findByIdAndUpdate({_id:req.params.commentId}, {$push:{replies:reply}}, {new:true});


    res.status(200).json(commentReply);


   }catch(err){
  
    console.log(err)

   }

}



 





module.exports = {

   addComment,
   getPostComments,
   addRepliesToComments

}





