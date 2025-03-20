'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/AuthContextlength';


const Cartinfo = () => {
      const {fetchCartLength}= useCart();
  const { user, setUser } = useAuth();
  const userId = user?._id;
 
  
  
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

// write a function for checkout session

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );



    const fetchCart = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/cart'); // Adjust this according to your API

            if (!response.ok) {
                throw new Error('Failed to fetch cart items');
            }

            const data = await response.json();
            //    console.log(data);

            // Check if cartdetails and cartdetails.items exist before setting the state
            if (data && data.cartdetails && Array.isArray(data.cartdetails.items)) {
                setCartItems(data.cartdetails.items);
            } else {
                setCartItems([]); // Or set an empty array if no items are available
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleremove = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/cart/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Failed to remove item from cart');
            }
            
    
            const data = await response.json();
            fetchCartLength();
            toast.success(data.msg, {
                position: 'top-center',
            });

            setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));

        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 5000,
            });
        }
    };

    const handleAddItem = async (itemId, item) => {
        try {
            const response = await fetch(`http://localhost:3000/api/cart/${itemId}/increment/${item.quantity}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Failed to increment item quantity');
            }

            const data = await response.json();
            toast.success(data.msg, {
                position: 'top-center',
            });

            // Update the local state to reflect the new quantity
            setCartItems(prevItems => prevItems.map(item =>
                item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            ));

        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 5000,
            });
        }
    };

    const handleDecrementItem = async (itemId, item) => {
        try {
            const response = await fetch(`http://localhost:3000/api/cart/${itemId}/decrement/${item.quantity}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Failed to decrement item quantity');
            }
         
         
            const data = await response.json();
            toast.success(data.msg, {
                position: 'top-center',
            });

            // Update the local state to reflect the new quantity
            setCartItems(prevItems => prevItems.map(item =>
                item._id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            ));

        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 5000,
            });
        }
    };

    const handleRemoveItem = (id) => {
        handleremove(id); // Call the remove handler with the item ID
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        fetchCart();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }


    const handleCheckout = async () => {
        const res = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cartItems,userId }),
        });
    
        if (res.ok) {
          const { url } = await res.json();
          window.location.href = url; // Redirect to Stripe Checkout
        } else {
          console.error('Error creating checkout session:', await res.json());
        }
      };
    return (
        <div className='flex items-center justify-between'>
            <div className="min-h-[60vh] w-[50vw] container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-600">Your cart is empty.</ p>
                    ) : (
                        <div>
                            {cartItems.map(item => (
                                <div key={item._id} className="flex items-center justify-between mb-4">
                                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                                    <div className="flex-1 mx-4">
                                        <h2 className="text-xl font-semibold">{item.title}</h2>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => handleDecrementItem(item._id, item)} className="bg-gray-200 px-2 py-1 rounded">
                                            -
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button onClick={() => handleAddItem(item._id, item)} className="bg-gray-200 px-2 py-1 rounded">
                                            +
                                        </button>
                                        <button onClick={() => handleRemoveItem(item._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-4 border-t pt-4">
                                <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
                            </div>
                            <div className="mt-6">

                                <button onClick={handleCheckout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    Proceed to Checkout
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cartinfo;