import React from 'react'
import CommentSection from './CommentSection'

const PostModal = ({currentPost}) => {

  
  return (

    <div>

    <div>

      <img src={currentPost.content}  alt='content'/>

   </div>

   <div>
     
     <p>{currentPost.caption}</p>

   </div>

  
    <CommentSection postId={currentPost._id}/>

    </div>
  )
}

export default PostModal