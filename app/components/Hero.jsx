// components/Hero.js
'use client'
import { useEffect, useState } from 'react';

import Image from 'next/image';


import ProductCard from './ProductCard';
import Banner from './Banner';

import { useAuth } from '../context/AuthContext';

const Hero = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   // Define async function to fetch user data
  //   const fetchUserData = async () => {
  //     const userdata = await fetch('http://localhost:3000/api/user');
  //     const userOutput = await userdata.json();
  //     const finesult = userOutput.user;
    
  //     // setUserData(finesult._id);
  //     // console.log(userData);
  //      // Store the fetched data in state
  //   };
    
  //   fetchUserData();
  // }, []); // Empty dependency array ensures this runs only once when the component mounts

  

  return (
    <>
      <div
        className="banner bg-no-repeat h-[100vh] object-fill  w-[100vw] "
        style={{
          backgroundImage: 'url("/GettyImages-1698761540.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-3xl w-[500px] text-center pt-[20%]">
          Clothing website where you can get the latest and new fashion clothes for any function..
        </h1>
      </div>
      <Banner  />
      <div className="carddisplay flex justify-evenly items-center m-6 gap-3">
        {/* Your product category display */}
      </div>
 {/* Pass cartItem and setCartItem as props to ProductCard */}
 <ProductCard  userData={userData}/>
    </>
  );
};

export default Hero;
