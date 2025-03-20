'use client';

import Link from 'next/link';
import { TiShoppingCart } from "react-icons/ti";
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '../context/AuthContextlength';

const Navbar = () => {
  const { user, setUser  } = useAuth();
 
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
 
const {cartLength}= useCart();

  const handleLogout = async () => {
    const result = await fetch('http://localhost:3000/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!result.ok) {
      const errorData = await result.json();
      throw new Error(errorData.msg || 'Network response was not ok');
    }

    const data = await result.json();
    toast.success('Logout successful!', {
      position: 'top-center',
    });

    if (result.ok) {
      setUser (undefined);
      router.push('/');
    }
  };

  // Scroll detection logic
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`bg-slate-800 h-[70px] w-[100vw] overflow-x-hidden text-white sticky top-0 z-20 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <p className="text-lg font-bold">MyStore</p>
        </Link>

        <div className="space-x-4 flex justify-center items-center gap-4">
        <div className="w-[70px] cart overflow-hidden">
        
        {user && user?.role==='user'? (
          <Link href="/cart">
            {cartLength>0 &&    <div className="value ml-[30px] rounded-full num w-6 h-6 text-red-600 text-center bg-white">
            {cartLength}
              </div>}
           
          
            <TiShoppingCart className='w-[50px] h-[45px] ' />
          </Link>
        ) : ( '')}
      </div>
        {user && user?.role !='user' ? (
          <Link href="/admin">
            <p className="hover:text-gray-400">Dashboard</p>
          </Link>
           ) : ('')}
           {user && user?.role !='user' ? (
           <Link href="/admin/users">
              <p className="hover:text-gray-400">Users</p>
            </Link>
            ) : ('')}
          { user && user?.role==='user' ? (
          <Link href="/">
            <p className="hover:text-gray-400">Home</p>
          </Link>
           ) : ('')}
          {user && user?.role==='admin' ? (<Link href="/admin/products">
            <p className="hover:text-gray-400 ">Products</p>
          </Link>)
          : ('')}
          {user && user?.role==='user' ? (
            <Link href="/allproduct">
              <p className="hover:text-gray-400 ">Products</p>
            </Link>
          ) : ( '')}
          {user && user?.role==='admin' ? ( <Link href="/admin/orders">
            <p className="hover:text-gray-400 ">Orders</p>
          </Link>): ('')}
          {user && user?.role =='user' ? (
          <Link href="/orderhistory">
            <p className="hover:text-gray-400">Order History</p>
          </Link>
           ) : ('')}
          <div className="login_signup mt-2">
            {user ? (
              <button onClick={handleLogout} className='bg-red-200 px-4 py-2 mb-2 rounded-full'>Logout</button>
            ) : (
              <>
                <Link href="/login">
                  <button className='bg-blue-200 px-6 py-3 rounded-full text-black'>Login</button>
                </Link>
                <Link href="/signup">
                  <button className='bg-blue-200 px-4 py-3 rounded-full text-black'>Signup</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;