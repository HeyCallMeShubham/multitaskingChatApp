import React from 'react';

import './App.css';

import RegisterForm from './pages/authpages/Register.js';

import LoginForm from './pages/authpages/Login.js';

import {Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar.js';
import Main from './pages/Main.js';
import UserPofileAboutPage from './pages/UserPofileAboutPage.js';
import PrivateChatRoom from './pages/PrivateChatRoom.js';
import Main2 from './pages/DashBoard.js';



function App() {

  return (

    <div className="App">
      

    <Navbar />


     <Routes>



     <Route path='/' element={<Main />}>

     <Route index path='/' element={<Main2 />} />

     <Route path='/userprofile/:userid' element={<UserPofileAboutPage /> } />

     <Route path='/direct/:selecteduserparamid' element={<PrivateChatRoom /> } />

     <Route path='/login' element={<LoginForm /> } />

     <Route path='/register' element={<RegisterForm /> } />



     </Route>
     

    </Routes>

    </div>
  );
}




export default App;
