'use client'

import React, { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/AuthContextlength';


const ProductCard = ({ searchTerm, userData }) => {
  const {fetchCartLength}= useCart();

  const { user, setUser } = useAuth();
  const [cartItem, setCartItem] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);


  // fetch products from the API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/product'); // Assuming your API route is `/api/products`
        const data = await response.json();

        if (response.ok) {
          setProducts(data.products);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Error: ' + err.message);
      }
    }

    fetchProducts();
  }, []);
  // Handle "Add to Cart" button click
  const goToCartPage = (productId) => {
    const productToAdd = products.find((product) => product._id === productId);
    
    // console.log("Adding product to cart:", productToAdd);
  
    setCartItem((prevCart) => {
      // console.log("Previous cart items:", prevCart);
      
      const existingProduct = prevCart.find((item) => item._id === productToAdd._id);
  
      if (existingProduct) {
        // console.log("Product already in cart, updating quantity.");
        return prevCart.map((item) =>
          item._id === productToAdd._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // console.log("Adding new product to cart.");
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };
  
  
// console.log("cart", cartItem);

  useEffect(() => {
    const createOrder = async () => {
      if (cartItem.length === 0) return; // Don't make API call if cart is empty
      
      const orderData = {
        userId: user._id,
        cartItems: cartItem.map(item => ({
          productId: item._id,
          image:item.imageUrl, 
          name:item.name, // Assuming each product has an `id` field
          quantity: item.quantity,
          price: item.price,   // Make sure the `price` field exists in `item`
        }))
      };
      
  // console.log("orderdta", JSON.stringify(orderData));
  
      try {
        const response = await fetch('http://localhost:3000/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.msg || 'Failed to create order');
        }
        fetchCartLength();
        setCartItem([]); // Clear the cart after the order is created
        const data = await response.json();
        // console.log(data);
        
        toast.success(data.msg, {
          position: 'top-center',
        });
        
      } catch (error) {
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 5000,
        });
      }
    };

    createOrder();  // Trigger the API call after the cart updates
  }, [cartItem]);  // Dependency on cartItem


  return (
    <div className="flex justify-center  flex-wrap gap-6 w-[100vw] p-10 overflow-x-hidden cursor-pointer">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex flex-col items-center justify-between min-w-[280px] max-w-[280px] max-h-[400px]  rounded-lg shadow-2xl overflow-hidden"
        >
          <Link href={`/product/${product.id}`}>
         <div className="image h-[200px] w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={900}
              height={200}
              priority
              className="w-full h-[180px] object-contain"
            /> 
            </div>
            <div className="p-4 flex  items-center justify-between">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              {/* <h2 className="text-xl font-semibold">{product.category}</h2> */}
              <h2 className="text-xl font-semibold">${product.price}</h2>
              </div>
              {/* <p className="mt-2 text-black">{product.description}</p> */}
            
          </Link>
          <button
            onClick={() => goToCartPage(product._id)}
            className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-32 mb-2"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
