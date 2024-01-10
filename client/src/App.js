import React from 'react';

import './App.css';

import RegisterForm from './pages/authpages/Register';

import LoginForm from './pages/authpages/Login';

import {Routes, Route} from "react-router-dom"

import Navbar from './components/Navbar.js';
import Main from './pages/Main.js';
import UserPofileAboutPage from './pages/UserPofileAboutPage.js';


function App() {



  return (
    <div className="App">

    <Navbar />


     <Routes>

  
     <Route path='/' element={<Main /> } />

     <Route path='/userprofile/:userid' element={<UserPofileAboutPage /> } />

      <Route path='/login' element={<LoginForm /> } />

      <Route path='/register' element={<RegisterForm /> } />

      

    </Routes>

    </div>
  );
}

export default App;
