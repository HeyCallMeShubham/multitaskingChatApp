import React,{useEffect, useState} from 'react'

import {useParams} from 'react-router-dom'

import axios from "axios"

import useSocketFunction from '../hooks/useSocket'

import {useDispatch, useSelector} from "react-redux"

const UserPofileAboutPage = () => {
  
  const socket = useSocketFunction();

   ///
    
   const user = useSelector((state) => state.user.currentUser);
  
   const [currentChatRoomId, setCurrentChatRoomId] = useState("");

   console.log(currentChatRoomId, "currentChatRoomIdz")

    const [userProfile, setUserProfile] = useState({})


     const {userid} = useParams();
  
    useEffect(()=>{

        const fetchSingleUserProfile = async() =>{

           try{

            const {data} = await axios.get(`http://localhost:4877/user/fetchsingleuser/${userid}`)

            console.log(data);

            setUserProfile(data);


           }catch(err){

            console.log(err);

           }


        }


        fetchSingleUserProfile();


    }, [])



    
    useEffect(() =>{
        
      const getRoom = (e) =>{
  
  
     axios.post(`http://localhost:4877/chatroom/getUsersChatRoom/${userid}/${user?._id}`,{
     
      method:"POST",
      headers:{'Content-Type':"application/json"},
     

      }).then((data) =>{

        console.log(data, 'fndjddjdjdjjdjdd')
     

      setCurrentChatRoomId(data?.data?._id);
     
     }).catch((err)=>{
     
      console.log(err)
     
      })
   
  
      }
  
  
  
      getRoom();
      


  }, [userid]);




    const sendMessage = (e) =>{

      e.preventDefault();


      const obj = {

        receiverId:userid,
        chatRoomId:currentChatRoomId,
        senderId:user._id,
        text:'peace of shit',
    
       };

      try{


      socket.emit("send-message", obj);


      }catch(err){
 
        console.log(err)

      }

    }

  
  
  return (
    
    
    <div>

    <button onClick={sendMessage}>send</button>


   <h2>{userProfile.userName}</h2>
     


    </div>
  
  
  )


}

export default UserPofileAboutPage