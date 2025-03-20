'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // For animations
import { useAuth } from '../context/AuthContext';

const OrderHistory = () => {
    const { user, setUser } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = user?._id;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`/api/orders/${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                const data = await response.json();
               
                
                // Sort orders by createdAt (newest first)
                const sortedOrders = data.orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setOrders(sortedOrders);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchOrders();
        }
    }, [userId]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Order History</h1>
            <div className="space-y-4">
                {Array.isArray(orders) && orders.length > 0 ? (
                    orders.map(order => (
                        <motion.div
                            key={order._id}
                            className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
                            <p className="text-gray-600">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p className="text-gray-600">Total: ${order.totalAmount.toFixed(2)}</p>
                            <p className="text-gray-600">Status: {order.status}</p>
                            <h3 className="text-lg font-semibold mt-4">Items:</h3>
                            <ul className="list-disc list-inside">
                                {order.items.map(item => (
                                    <li key={item.productId} className="flex items-center mt-2">
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                            className="mr-2 rounded"
                                        />
                                        <span>{item.name} (Qty: {item.quantity}, Price: ${item.price.toFixed(2)})</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))
                ) : (
                    <div className="text-center">No orders found.</div>
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
