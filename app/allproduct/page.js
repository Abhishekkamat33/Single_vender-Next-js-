'use client'
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard'


const AllproductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
 

    // Handle Search Input Change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };


  return (
    <>
    {/* <header className="bg-gray-800 w-[98.5vw] ml-0.5 overflow-hidden text-white py-5 px-6 flex justify-between items-center sticky top-0 z-50">
            <div className="text-xl font-bold">
                <h1>My Product Store</h1>
            </div>
            <div className="flex gap-5 items-center mr-[30vw]">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="px-4 py-2 w-[30vw] rounded-md border text-black border-gray-300 focus:outline-none focus:border-orange-500"
                />    
            </div>
        </header> */}
    <div className='w-[98.5vw] overflow-hidden '>
     

      <div className="product-list">
        <h2>Products</h2>
        <ProductCard searchTerm={searchTerm}/>
      
    </div>
    </div>
    </>
  );
};

export default AllproductPage;
