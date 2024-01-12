import React, { useEffect, useState } from 'react'
import RightBar from '../components/RightBar.js'
import LeftBar from "../components/LeftBar.jsx"
import { addNotifications } from '../features/notificationSlice.js'
import useSocketFunction from "../hooks/useSocket.js"
import {useDispatch, useSelector} from "react-redux"
import dashboard from "../stylings/dashboard.css"

//import {io} from "socket.io-client"
//const socket = io.connect("http://localhost:4877");

import { Outlet } from 'react-router-dom'
import CommentSection from '../components/CommentSection.js'
import axios from 'axios'
import InstagramPost from '../components/InstagramPost.js'

const DashBoard = () => {

 const socket = useSocketFunction();

  console.log(socket, 'hhhfhfff');


  const dispatch = useDispatch()


  useEffect(() =>{
    
   socket.on("message", (data) =>{
     
     console.log(data, 'dtaa');
   
     dispatch(addNotifications(data));
   
   
   });


  }, [socket]);



 
 
 
  
  const userId = useSelector((state) => state.user.currentUser?._id);
  
  ////

  const [onlineUsers, setOnlineUsers] = useState([]);

  const [posts, setPosts] = useState([]);



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


  useEffect(() => {


   const getPostsByUsersThatCurrentUserFollows = async() =>{

      try{

        const {data} = await axios.get("http://localhost:4877/post/getuserposts", {

        method:"GET",
        headers:{'Content-Type':"application/json"},
 
  
        });


        console.log(data, 'postsss')

        setPosts(data)


      }catch(err){

        console.log(err)

      }

   }


   getPostsByUsersThatCurrentUserFollows()


  }, []);

 

  return (


   <div className='main-box-container'>
    
<ul>

    {posts.map((post) =>(

      <li key={post._id}>

        <InstagramPost key={post._id} post={post} />

      </li>


    ))



    }

</ul>



      <div>
        
        
        {
     
        onlineUsers.map((user) =>(
     
        <p>{user?.userId}</p>
     
        )) 
     
       }
       
        
      </div>


      <CommentSection />
   

    </div>
  )
}

export default DashBoard