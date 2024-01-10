import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"



const Search = () => {


  const [beingSearched, setBeingSearched] = useState("");

  const [searchingUsersConntainer, setSearchingUsersContainer] = useState([]);
  
  


  
  useEffect(() =>{
    
    const searchSearching = async(e) =>{
  
  
  
     try{
   
     const {data} = await axios.get(`http://localhost:4877/user/search/searchusers?search=${beingSearched}`)
  
       setSearchingUsersContainer(data);
  
     }catch(err){
   
         console.log(err)
  
     }
  
    };
    
   searchSearching();


  },[beingSearched]);

  
 return (
    
    
  <div>
   


   <form >

   <input type='text' onChange={(e) => setBeingSearched(e.target.value)} placeholder='search a profile' />

   <button type="text" >Search</button>

   </form>


   {beingSearched ? (
       
       <div>

        {searchingUsersConntainer.map((user) =>(

           <div key={user._id} >

            <Link to={`userprofile/${user._id}`}>

             <p>{user.userName}</p>
            
            </Link>
           
           </div>


        ))

        }
    
    
       </div> 
       
       ) : (

       <div>
       
     
     <p>Search Someone's name</p>


   </div>


  )
       
       
}



  </div>
    
  
 )



}

export default Search