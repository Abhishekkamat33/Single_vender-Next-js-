'use client'
import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';

const Signup = () => {
  const router = useRouter();  // Correct hook for App Directory
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(formData);
    const {email,password}=formData;

    if(email==="" || password===""){
      return null;
    }
    
    try {
      const response = await fetch('http://localhost:3000/api/signup', { // Corrected endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData) // Send formData directly
      });

      if (!response.ok) {
        // If response is not ok, attempt to parse the error message from the response
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Network response was not ok'); // Default message if no error msg
      }

      const data = await response.json();
      
      toast.success('Signup successful!',{
        position:'top-center',
      },); // Assuming the server responds with JSON
     if(response.ok){
      router.push('/login')
     }
     // Navigating to the user page
    } catch (error) {
      console.log("Error:", error.message);
      
      toast.error(error.message,{
        position:'top-center',
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 m-auto">
     <ToastContainer />
      <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Example"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="********"
          />
          <div className=" absolute top-[55%] right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </div>
        </div>


        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200">Sign Up</button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Log in</Link></p>
    </div>
  );
};

export default Signup;
