
const express = require("express");
const { addPost, getUserPosts, getOnePost } = require("../controllers/postsController");
 


const postRouter = express.Router()



postRouter.post('/addpost', addPost), 

postRouter.get('/getuserposts', getUserPosts), 

postRouter.get('/getcurrentpost/:postId', getOnePost), 






module.exports = postRouter


