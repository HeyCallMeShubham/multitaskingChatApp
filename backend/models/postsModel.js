
const mongoose = require("mongoose");



const multitaskingPosts = new mongoose.Schema({

    postedByUserId:String,
    caption:String,
    content:String,
    likes:Array,
    shares:Array,

});





const multitaskingPostsModel = new mongoose.model('multitaskingpost', multitaskingPosts)



module.exports = multitaskingPostsModel
















