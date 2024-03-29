import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import navbar from "../stylings/navbar.css"


const Navbar = () => {


  const notifications = useSelector((state) => state.msgNotifications.notifications)
  
  
  
  const navigations = [
    
    {

        name:"HOME",
        link:"/",

    },
    
    {

        name:"ABOUT",
        link:"/about",

    },
    
    {

        name:"CONTACT",
        link:"/contact",

    },

]


  return (

    <div className='navbar--'>

    <div className='navbar-container'>

   <ul>

    {navigations.map((navigation) =>(

     <Link to={navigation?.link}>
     
     <li>{navigation?.name}</li>

     </Link>

    ))


    }


   </ul>

    {notifications?.length ? notifications?.length : 0}
  


    </div>

    </div>
  )
}

export default Navbar