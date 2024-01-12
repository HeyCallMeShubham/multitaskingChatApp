import React, { useEffect, useState } from 'react'
import RightBar from '../components/RightBar.js'
import LeftBar from "../components/LeftBar.jsx"
import { Outlet } from 'react-router-dom'

const Main = () => {

 
  return (


   <div className='main-box-container'>


  <LeftBar />
  
     <div>
        
   <Outlet /> 
        
    </div>

  <RightBar />




    </div>
  )
}

export default Main