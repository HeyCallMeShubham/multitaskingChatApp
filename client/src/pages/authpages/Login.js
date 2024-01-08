
import React, { useState } from 'react';

import {useDispatch} from "react-redux"

import axios from "axios"
import { signInCart, signInSuccess } from '../../features/userSlice';

const LoginForm = () => {
  


   const [formData, setFormData] = useState({

    email: '',
    password: '',

});



  const dispatch = useDispatch()


  const handleChange = (e) => {

    const { name, value, } = e.target;
    
  
      setFormData({
        ...formData,
        [name]: value,
      });
 

    console.log(formData, "form")

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Perform registration logic here, such as sending the data to a server

    // For demonstration purposes, log the form data to the console
       
    const {data} = await axios.post(`http://localhost:4877/user/login`, {

    method:"POST",
    headers:{'Content-Type':"application/json"},
    formData
    

   });

    dispatch(signInSuccess(data))


   console.log(data)
  };

  return (

    <form onSubmit={handleSubmit}>


      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>


      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>




      <button type="submit">Login</button>
    </form>



  );
};

export default LoginForm;
