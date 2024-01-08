import React, { useEffect, useState } from 'react'

import axios from "axios"



const Search = () => {


  const [searched, setSearched] = useState("");


  useEffect(() =>{

   const searchSearching = async(e) =>{



    try{
  
    const {data} = await axios.get(`http://localhost:4877/?search=${searched}`)


    }catch(err){
  
        console.log(err)

    }

   }


   searchSearching()

  },[searched])

  
 return (
    
    
  <div>
   


   <form>

   <input type='text' onChange={(e) => setSearched(e.target.value)} placeholder='search a profile' />

   <button type="text" >Search</button>

   </form>


   {searched ? (
       
       <div>
    
    
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