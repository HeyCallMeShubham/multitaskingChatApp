import React, { useEffect, useState } from 'react'
import axios from "axios"
const CommentSection = ({postId}) => {

    const [replyButtonToggle, setReplyButtonToggle] = useState(false)
     
    const [comments, setComments] = useState([])
    

    useEffect(() =>{


      const getPostComment = async() =>{
      
   
         try{


            const {data} = await axios.get(`http://localhost:4877/comment/${postId}/comments`)

            console.log(data, 'comments')

            setComments(data);


         }catch(err){

            console.log(err)

         }

      }


      getPostComment();


    }, [postId])


  return (

    <div>
  
  <form>
 
  

  </form>

 

{comments?.length ? comments.map((comment) =>(

<div key={comment?._id}>
     
     <span>{comment?.userName}</span>

   <p>{comment?.commentContent}</p>
   
   <span onClick={() => setReplyButtonToggle((prev) => !prev)}>Reply</span>

  {replyButtonToggle ? (

   <div>


      {comment?.replies?.length ? comment?.replies?.map((reply) =>(
    
       <p>{reply?.reply}</p>
    
      )) : <p>{comment?.replies?.length}</p>
    
      }


   </div> 


  ) : "no replies"



}





</div>
   



)) : <p>be the first one to comment on this post</p>



}



    </div>



  )
}

export default CommentSection









