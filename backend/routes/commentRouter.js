

  const express = require("express");
const { addComment, getPostComments, addRepliesToComments } = require("../controllers/commentsController");

  

  const commentRouter = express.Router()



  commentRouter.post("/onpost/addcomment", addComment);

  commentRouter.get("/:postId/comments", getPostComments);

  commentRouter.put("/:commentId/reply", addRepliesToComments);




module.exports = commentRouter



