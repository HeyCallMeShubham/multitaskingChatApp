import React, { useEffect, useState } from 'react'

import { IoSearch } from "react-icons/io5"

import { IoHome } from "react-icons/io5";

import { FaRegCompass } from "react-icons/fa";

import { BsCameraReelsFill } from "react-icons/bs";

import { IoIosNotifications } from "react-icons/io";

import { MdLibraryAdd } from "react-icons/md";

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Search from './Search.js';

import ChatRoom from './ChatRoom.js';

import axios from "axios";

import {Navigate} from 'react-router-dom'


const LeftBar = ({socket}) => {

  
  const user = useSelector((state) => state?.user?.currentUser);
 
  const [search, setSearch] = useState(false);

   
   const SearchToggle = (e) =>{

    e.preventDefault();

    if(search){

      setSearch(false)

    }else{

     setSearch(true)

    }

   }

 const iconsOptions = [
   
    {

    Icon:<IoHome />,
    name:"Home",
    navigateTo:"/"
    
    },

    
    {
      
      Icon:<IoSearch />,
      name:"Search",
       onClick:SearchToggle,


    },


    {
      
    Icon:<FaRegCompass />,
    name:"Explore",
    navigateTo:"/explore"

    },

    
    {

      Icon:<BsCameraReelsFill />,
      name:"Reels",
      navigateTo:"/reels"
      
    },

    
    {

    Icon:<IoIosNotifications />,
    name:"Notifications",
    navigateTo:"/notifications"

  },

  
  {

    Icon:<MdLibraryAdd />,
    name:"Add",
    
  },



  {

      Icon:user.userName ? user.userName : <MdLibraryAdd />,
      name:"userProfile",
      navigateTo:`/userprofile/${user?._id}`
    
  },
  
  
];


 



const [conversationUsers, setConversationUsers] = useState([])


const [userChatRooms, setUserChatRooms] = useState([]);


const [selectedUserToChat, setSelectedUserToChat] = useState("");





useEffect(() =>{

  const getAllTheUsersChattedWith = async() =>{
     
    try{
      

        const {data} = await axios.get(`http://localhost:4877/chatroom/getcurrentuserchatrooms/${user._id}`)
        
        setConversationUsers(data);
        
      }catch(err){
        
        console.log(err);
        
        Navigate('/login');        
        
      }
      
    }
    
    
    getAllTheUsersChattedWith();
    

  }, [user]);

  
  
  
  
  
  
  useEffect(() =>{
    
    
    socket.on("online-users", (data) =>{
      
      
      setUserChatRooms(data);
      
      
    })


  }, [socket]);


  
  
  
  
  useEffect(() =>{
    
    const getCurrentUserChatRooms = async() =>{
      
      try{
        
        if(user?._id){
          
          const {data} = await axios.get(`http://localhost:4877/chatroom/getcurrentuserchatrooms/${user?._id}`);
          
          console.log(data, 'chatroom')
          
          //  setConversationUsers(data);
          
        }else{
          
          
        }
        
        
     }catch(err){

     console.log(err)

     }

    };


   getCurrentUserChatRooms();


  }, []);
  
  
  
  
  const searchFunctionality = (e) =>{
    
    e.preventDefault();
    
    
  }
  
  
  
  return (
    
    <div>
    


  
    {iconsOptions?.map((option) =>(
    
    <Link to={option?.navigateTo}>
      
      <div onClick={option?.onClick} key={option?.Icon}>
      
      <span>{option?.Icon}</span>
   
      </div>
   
    </Link>
 
 ))
  
 }
     


 
  {search ? (
    
   <div>
 
 <Search />   
 
   </div>
 
 
 ) : (


 <div>

 
  </div> 


 )
 
}








{conversationUsers?.map((data) =>(
  
  <h1 onClick={() => setSelectedUserToChat(data?._id)} key={data?._id}>{data?.userName}</h1>
  
  ))
  
}


 
 

 {selectedUserToChat ? (
   
 <ChatRoom selectedUserToChat={selectedUserToChat} currentUser={user} socket={socket} />
 
 ) : <p> please select a user to chat with </p>
 
}
 
 


</div>


)



}

export default LeftBar





