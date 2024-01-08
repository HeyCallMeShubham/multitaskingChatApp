
const express = require("express");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");
require("dotenv").config();

const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const chatRoomRouter = require("./routes/chatRoomRoutes");
 
const MessageModel = require("./models/messageModel");
const messagesRouter = require("./routes/messagesRouter");



const app = express();


mongoose.connect("mongodb+srv://shubham:mylife@cluster0.natwega.mongodb.net/");





app.use(cors({

   origin:'http://localhost:3000',
   method:["GET", 'POST', "PUT", "DELETE"],
   credentials:true

}));




app.use(bodyParser.json());

app.use(cookieParser());

app.use('/user', userRouter);

app.use('/chatroom', chatRoomRouter);

app.use('/messages', messagesRouter);

app.use(bodyParser.urlencoded({extended:true}));



const expressServer = app.listen(process.env.HOST, 
    
    console.log(`port is listening ${process.env.HOST}`)
  
);




const io = new Server(expressServer, {
   
 cors:{

  origin:"http://localhost:3000"

 }

});






const activeUsers = [];






io.on("connection", (socket) =>{
    
    
    socket.on("join", (userId) =>{
        
        
        //console.log(userId, 'userid');

        socket.join(userId);
        
     //   activeUsers[userId] = socket.id;  

     
     if(!activeUsers.some((user) => user.userId === userId)){

        activeUsers.push({
      
          userId:userId,
          socketId:socket.id
  
        });

    }

    io.emit("online-users", activeUsers);



    });
    
    
    console.log(activeUsers, 'hhehehee');
    
    socket.on("send-message", async(data) =>{

        
        const message = await MessageModel.create({

            chatRoomId:data?.chatRoomId,
            senderId:data?.senderId,
            receiverId:data?.senderId,
            text:data?.text
          

           });

           console.log(message, 'message');

           
           if(message){

               io.to(data?.receiverId).emit("message", message);

               console.log("sent message successfully")

           };

        
        
        
    });


    
    
})
















