import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PostModal from '../components/PostModal';

const PostDetails = () => {

    const navigate = useNavigate();

   const {postId} = useParams();


    const [showModal, setShowModal] = useState(false)

    const [currentPost, setCurrentPost] = useState({})


     useEffect(() =>{

      const fetchCurrentPostDetails = async() =>{

        try{

            const {data} = await axios.get(`http://localhost:4877/post/getcurrentpost/${postId}`, {

              method:"GET",
              headers:{'Content-Type':"application/json"}

            });

            console.log(data, 'currentPost')
         
            setCurrentPost(data)



        }catch(err){

         console.log(err);

        }

        }

        fetchCurrentPostDetails();

        setShowModal(true)


       }, []);


  return (

    <div>

        {showModal && <PostModal currentPost={currentPost} />}


    <span onClick={() => navigate(-1)} >*</span>



    </div>
  )
}

export default PostDetails