import React, { useEffect, useState } from 'react'
import RightBar from '../components/RightBar.js'
import LeftBar from "../components/LeftBar.jsx"
import { addNotifications } from '../features/notificationSlice.js'
import useSocketFunction from "../hooks/useSocket.js"
import {useDispatch, useSelector} from "react-redux"
import main from "../stylings/main.css"
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
 
 
 
  
  const userId = useSelector((state) => state.user.currentUser?._id);
  
  ////

  const [onlineUsers, setOnlineUsers] = useState([]);



  /// message related states



  



  useEffect(() =>{
    
    socket.emit("join", userId);

  }, []);    




  useEffect(() =>{

 
    socket.on("online-users", (data) =>{

      
     const onlineUsers = data.filter((data) => data.userId !== userId)


      setOnlineUsers(onlineUsers);
 

    });


  }, [socket]);







  
  

 

  return (


   <div className='main-box-container'>


   <LeftBar socket={socket} />

   <div>

   {

   onlineUsers.map((user) =>(

   <p>{user?.userId}</p>

   )) 

  }


   </div>

  <RightBar />



    </div>
  )
}

export default Main