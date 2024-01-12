import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useSocketFunction from '../hooks/useSocket';
import { removeNotifications } from '../features/notificationSlice';

const PrivateChatRoom = () => {

  
    const user = useSelector((state) => state?.user?.currentUser);
  
    const selectedUserToChat = useSelector((state) => state?.msgreceiver?.selectedUserToChat);
  
    const {selecteduserparamid} = useParams('');
     
    const [newMessage, setNewMessage] = useState("");

    const [currentChatRoomId, setCurrentChatRoomId] = useState("");

    const [roomConversations, setRoomConversations] = useState([]);

    const [messageNotifications, setMessageNotifications] = useState([]);

    const socket = useSocketFunction();
    
    

    const dispatch = useDispatch()
 

    useEffect(() =>{
        
        const getRoom = (e) =>{
    
    
    
       axios.post(`http://localhost:4877/chatroom/getUsersChatRoom/${selecteduserparamid}/${user?._id}`,{
       
        method:"POST",
        headers:{'Content-Type':"application/json"},
       

        }).then((data) =>{

            console.log(data.data._id, 'fhfhfhfhfh currentchat rooom id ddd')
       
        setCurrentChatRoomId(data?.data?._id);
       
       }).catch((err)=>{
       
        console.log(err)
       
        })
     
    
        }
    
    
    
        getRoom();
        
 

    }, [selecteduserparamid, selectedUserToChat]);






  useEffect(() =>{
    
        
  const getChatRoomConversations = async() =>{
       
       try{
      
            const {data} = await axios.get(`http://localhost:4877/messages/getroomconversations/${currentChatRoomId}`, {

             method:"GET",
             headers:{"Content-Type":"application/json"},
           
           
         });

         console.log(data, 'conversatins')
         
         
        setRoomConversations(data)

         console.log(data, 'dttaa alll conversations of this room')
 
           
    }catch(err){
           
      console.log(err)

    }
           
};
  

    getChatRoomConversations();

    
 }, [currentChatRoomId, selecteduserparamid, selectedUserToChat]);





    

 useEffect(() =>{

    dispatch(removeNotifications(selecteduserparamid));
  
  }, [roomConversations, selecteduserparamid, selectedUserToChat]);
  


    
 
socket.on("message", (data) =>{
  
    ///console.log(data, 'dtaa');
    
  
   setRoomConversations([...roomConversations, data]);
  
  
  
});
   
   
   
   



 const sendmsg = (e) =>{

    e.preventDefault();
  
     const obj = {
  
      receiverId:selectedUserToChat,
      chatRoomId:currentChatRoomId,
      senderId:user?._id,
      text:newMessage,
  
     };
  
  
     try{
  
      
  
  
      if(newMessage !== "" && selecteduserparamid ){
  
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
   {data?.senderId === user?._id 
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

export default PrivateChatRoom