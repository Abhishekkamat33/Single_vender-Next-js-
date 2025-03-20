// context/AuthContext.js
'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for auth data
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);



  // A function to fetch user data (this could be fetched from a backend or from a cookie)
  const fetchUser = async () => {
    try {
      // Simulate an API request or cookie check to get user info
      const response = await fetch('http://localhost:3000/api/current');  // Adjust this according to your API
      const data = await response.json();

      if (data.user) {
        setUser({...data.user});  // Set user data if available
      } else {
        setUser(null);  // No user found
      }
    } catch (error) {
      // console.log("Error fetching user data:", error);
      setUser(null);  // Fallback to no user
    }
  };


  // Use effect to fetch user data when the component mounts
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
