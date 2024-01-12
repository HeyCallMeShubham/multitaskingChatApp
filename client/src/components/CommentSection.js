import React, { useEffect, useState } from 'react'
import axios from "axios"
const CommentSection = ({postId}) => {

    const [replyButtonToggle, setReplyButtonToggle] = useState(false)
     
    const [comments, setComments] = useState([])
    

    useEffect(() =>{


      const getPostComment = async() =>{
      
   
         try{


            const {data} = await axios.get(`http://localhost:4877/comment/${'65a02f24a65f34c6b6240d6d'}/comments`)

            console.log(data, 'comments')

            setComments(data)


         }catch(err){

            console.log(err)

         }

      }


      getPostComment();


    }, [])


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

      <p>comment</p>

      <span>Reply</span>


      </div>


   ) : "comment section"


   }
    

</div>
   



)) : <p>be the first one to this post</p>



}


    </div>
    
  )
}

export default CommentSection