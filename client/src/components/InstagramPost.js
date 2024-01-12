// InstagramPost.js
import React from 'react';
import instagramcss from '../stylings/instagrampost.css';

import {Link, useNavigate} from "react-router-dom"
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";

import { CiShare2 } from "react-icons/ci";



const InstagramPost = ({key, post}) => {

  const comments = [
    { username: 'user1', text: 'This is an awesome post!' },
    { username: 'user2', text: 'Great photo!' },
    { username: 'user3', text: 'Love it!' },
  ];





  return (

    <div className="instagram-post" key={key}>
    <div className="post-header">
      <img
        className="user-avatar"
        src={post.content}
        alt="User Avatar"
      />
      <span className="username">{post.postedByUserId}</span>
    </div>
    <div className="post-image">
      <img src={post.content} alt="Post" />
    </div>
    <div className="post-content">
     <span>{<BiLike /> }</span>
     {/*<BiSolidLike />*/}

     <Link to={`/${post._id}/postdetail`}>
     <span>{<FaRegCommentAlt />}</span>
     </Link>

     <span>{<CiShare2 />}</span>
       
    </div>


    

  </div>
  );
};

export default InstagramPost;
