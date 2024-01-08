import React, { useState } from 'react';

import axios from "axios"

const RegisterForm = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
  });

  const handleChange = async(e) => {

    const { name, value, type, files } = e.target;
    
    // If the input is a file (for image upload), set the 'image' field to the selected file
 
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      // For other inputs, update the state with the new value
      setFormData({
        ...formData,
        [name]: value,
      });
    }


  };

  const handleSubmit = async(e) => {

    e.preventDefault();
    
    // Perform registration logic here, such as sending the data to a server

    // For demonstration purposes, log the form data to the console
      
    const {data} = await axios.post(`http://localhost:4877/user/register`, {

    method:"POST",
    headers:{'Content-Type':"application/json"},
    formData
    

   });

   console.log(data)


  };





  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

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
      <br />

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
      <br />

      <label>
        Upload Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
