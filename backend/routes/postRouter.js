
const express = require("express");
const { addPost, getUserPosts } = require("../controllers/postsController");
 


const postRouter = express.Router()



postRouter.post('/addpost', addPost), 
postRouter.get('/getuserposts', getUserPosts), 






module.exports = postRouter


