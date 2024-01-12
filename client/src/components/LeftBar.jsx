import React, { useEffect, useState } from 'react'

import { IoSearch } from "react-icons/io5"

import { IoHome } from "react-icons/io5";

import { FaRegCompass } from "react-icons/fa";

import { BsCameraReelsFill } from "react-icons/bs";

import { IoIosNotifications } from "react-icons/io";

import { MdLibraryAdd } from "react-icons/md";

import { SiGooglemessages } from "react-icons/si";

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Search from './Search.js';

import ChatRoom from './ChatRoom.js';

import axios from "axios";

import {Navigate} from 'react-router-dom'
import useSocketFunction from '../hooks/useSocket.js';


const LeftBar = () => {

  const socket = useSocketFunction();

  const user = useSelector((state) => state?.user?.currentUser);
 
  const [searchToggle, setSearchToggle] = useState(false);

  const [inboxToggle, setInboxToggle] = useState(false);

   
   const SearchToggle = (e) =>{

    e.preventDefault();

    setSearchToggle((prev) => !prev)


   }
   
   

   const toggleInbox = (e) =>{

    e.preventDefault();

     setInboxToggle((prev) => !prev)

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

    Icon:<SiGooglemessages />,
    name:"Inbox",
    navigateTo:"/direct",
    onClick:toggleInbox,

    
  },


  {

      Icon:user.userName ? user.userName : <MdLibraryAdd />,
      name:"userProfile",
      navigateTo:`/userprofile/${user?._id}`
    
  },
  
  
];


 



const [conversationUsers, setConversationUsers] = useState([])



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
      
    /// onlines users list
      
      
    })


  }, [socket]);


  
  
  
  

  
  
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
     


 
  {searchToggle ? (
    
   <div>
 
 <Search />   
 
   </div>
 
 
 ) : inboxToggle ? (


 <div>
   
   
      {conversationUsers.length ? conversationUsers?.map((data) =>(

        <Link to={`/direct/${data._id}`}>
        <h1 onClick={() => setSelectedUserToChat(data?._id)} key={data?._id}>{data?.userName} ggg</h1>
        
        </Link>

                
        
        )) : (
        
          <div>
            
            <p>you have no friends to talk with start by sending messages to your friends</p>

            <div>
 
            <Search />   
 
            </div>
 

          </div>

        
        )
      }

 
  </div>    


) : ""

} 


{/*


{selectedUserToChat ? (
  
<ChatRoom selectedUserToChat={selectedUserToChat} currentUser={user} socket={socket} />

) : <p> please select a user to chat with </p>

}


*/}

 


</div>


)


}

export default LeftBar





