import React, { useEffect, useState } from 'react'
import RightBar from '../components/RightBar.js'
import LeftBar from "../components/LeftBar.js"
import {io} from "socket.io-client"
import {useDispatch, useSelector} from "react-redux"
import { addNotifications } from '../features/notificationSlice.js'

const socket = io.connect("http://localhost:4877");


const Main = () => {

  console.log('users');




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