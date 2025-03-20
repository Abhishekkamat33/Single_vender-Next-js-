// CartContext.js
'use client'
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a Context for the Cart
const CartContext = createContext();

// CartProvider to manage the global state
export const CartProvider = ({ children }) => {
  const [cartLength, setCartLength] = useState(0);
  const fetchCartLength = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/cart'); // Your API endpoint
      const data = await response.json();
  
      // Check if cartdetails is an object and has items
      const cartItems = data.cartdetails && Array.isArray(data.cartdetails.items) ? data.cartdetails.items : [];
      const value = cartItems.length;
  
      if (value) {
        setCartLength(value);
      } else {
        setCartLength(0); // If no items, set length to 0
      }
  
    } catch (error) {
      setCartLength(0); // Set 0 in case of error
    }
  };
  

  useEffect(() => {
    fetchCartLength();
  }, []); // Fetch on component mount

  return (
    <CartContext.Provider value={{ cartLength, fetchCartLength}}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
