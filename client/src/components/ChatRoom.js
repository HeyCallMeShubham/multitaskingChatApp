import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNotifications, removeNotifications } from '../features/notificationSlice';

const ChatRoom = ({selectedUserToChat, currentUser, socket}) => {
  
     
    const [newMessage, setNewMessage] = useState("");

    const [currentChatRoomId, setCurrentChatRoomId] = useState("");

    const [roomConversations, setRoomConversations] = useState([]);

    const [messageNotifications, setMessageNotifications] = useState([]);


    const dispatch = useDispatch()


    console.log(selectedUserToChat, 'selectedusertochat')

    console.log(currentChatRoomId, 'currentRoomId')


    

    useEffect(() =>{

      dispatch(removeNotifications(selectedUserToChat));
    
    }, [roomConversations, selectedUserToChat]);
    
    
    


    useEffect(() =>{
        
        const getRoom = (e) =>{
    
    
    
       axios.post(`http://localhost:4877/chatroom/getUsersChatRoom/${selectedUserToChat}/${currentUser?._id}`,{
       
        method:"POST",
        headers:{'Content-Type':"application/json"},
       

        }).then((data) =>{
       

        setCurrentChatRoomId(data?.data?._id)
       
       }).catch((err)=>{
       
        console.log(err)
       
        })
     
    
        }
    
    
    
        getRoom();
        
 

    }, [selectedUserToChat]);




    
    
  useEffect(() =>{
    
        
  const getChatRoomConversations = async() =>{
       
       try{
      
            const {data} = await axios.get(`http://localhost:4877/messages/getroomconversations/${currentChatRoomId}`, {

             method:"GET",
             headers:{"Content-Type":"application/json"},
           
           
         });
         
         
        setRoomConversations(data)

         console.log(data, 'dttaa alll conversations of this room')
 
           
    }catch(err){
           
      console.log(err)

    }
           
};
  

    getChatRoomConversations();

    
 }, [currentChatRoomId]);







 
socket.on("message", (data) =>{
  
  ///console.log(data, 'dtaa');
  

 setRoomConversations([...roomConversations, data]);



});
 
 
 
 








 const sendmsg = (e) =>{

  e.preventDefault();

   const obj = {

    receiverId:selectedUserToChat,
    chatRoomId:currentChatRoomId,
    senderId:currentUser?._id,
    text:newMessage,

   };


   try{

    


    if(newMessage !== "" && currentChatRoomId && selectedUserToChat && currentUser?._id){

      socket.emit("send-message", obj);
  
      setRoomConversations([...roomConversations, obj]);

    }else{

     alert("please write something in input")

    }


   }catch(err){

    console.log(err)

  };

   
 setNewMessage('');


}
  
return (
  
  
  <div>

{roomConversations?.length ? roomConversations.map((data) =>(
   <div>
   {data?.senderId === currentUser?._id 
   ? <p>your message{data?.text}</p>
   : <p>other user message{data?.text}</p>
   }
    </div>

)) : <p>send a message to start a conversation</p>} 



<form onSubmit={sendmsg}>

<input type='text' value={newMessage} placeholder='write a message here' onChange={(e) => setNewMessage(e?.target?.value)} />

<button type='submit'>Sendmesg</button>

 </form>


  </div>

)


}

export default ChatRoom



