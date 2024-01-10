import React, { useEffect, useState } from 'react'
import RightBar from '../components/RightBar.js'
import LeftBar from "../components/LeftBar.js"
import { addNotifications } from '../features/notificationSlice.js'
import useSocketFunction from "../hooks/useSocket.js"
import {useDispatch, useSelector} from "react-redux"
//import {io} from "socket.io-client"
//const socket = io.connect("http://localhost:4877");


const Main = () => {

 const socket = useSocketFunction();

  console.log(socket, 'hhhfhfff');


  const dispatch = useDispatch()


  useEffect(() =>{
    
   socket.on("message", (data) =>{
     
     console.log(data, 'dtaa');
   
     dispatch(addNotifications(data));
   
   
   });


  }, [socket])
 
 
 
  
  const userId = useSelector((state) => state.user.currentUser._id);
  
  ////

  const [onlineUsers, setOnlineUsers] = useState([]);



  /// message related states



  



  useEffect(() =>{
    
    socket.emit("join", userId);

  }, []);    




  useEffect(() =>{

 
    socket.on("online-users", (data) =>{

      
     const onlineUsers = data.filter((data) => data.userId !== userId)
      
      ///console.log(onlineUsers, 'online-userssrsrss');

      setOnlineUsers(onlineUsers);
 
    });


  }, [socket]);







  
  

 

  return (


    <div>


   <LeftBar onlineUsers={onlineUsers} socket={socket} />
  
  <h1>

  main

  </h1>

  <RightBar />



    </div>
  )
}

export default Main