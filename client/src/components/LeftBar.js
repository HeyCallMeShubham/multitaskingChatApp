import React, { useEffect, useState } from 'react'

import { IoSearch } from "react-icons/io5"
import { IoHome } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

import { MdLibraryAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search';
import ChatRoom from './ChatRoom.js';



const LeftBar = ({onlineUsers, socket}) => {


  const user = useSelector((state) => state.user.currentUser);

  console.log(onlineUsers, 'onlineusersss');

  const iconsOptions = [
     
    {

    Icon:<IoHome />,
    name:"Home",
    navigateTo:"/"

    },


    {

    Icon:<IoSearch />,
    name:"Search",
    navigateTo:"/"

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
    name:"Add",
    
    },


  ];




   const [search, setSearch] = useState(false);




  const [userChatRooms, setUserChatRooms] = useState([]);


  const [selectedUserToChat, setSelectedUserToChat] = useState("");





  useEffect(() =>{


   socket.on("online-users", (data) =>{

     console.log(data, 'hello');

   setUserChatRooms(data);

  })


  }, [socket])




   const searchFunctionality = (e) =>{

    e.preventDefault();

   
   }







  {/*


  
  {userChatRooms.map((data) =>(

    <p>{data.userId}</p>
 
    ))
  
  }



*/}



  return (
  
 <div>

<IoHome />

<IoSearch onClick={() => setSearch(true) } />

<FaRegCompass />

<BsCameraReelsFill />

<IoIosNotifications />

<MdLibraryAdd />



{search ? (

<div>

 <Search />   

</div>


 ) : ""

}





 

{onlineUsers?.map((data) =>(

<div onClick={() => setSelectedUserToChat(data.userId)} key={data.userId}>

 <p>{data.userId}online users</p>

</div>

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