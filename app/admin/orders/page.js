'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend when the page loads
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        const data = await response.json();
     
     
        if (data.orders) {
          setOrders(data.orders);
        } else {
          toast.error('Failed to fetch orders', { position: 'top-center' });
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Error fetching orders', { position: 'top-center' });
      }
    };

    fetchOrders();
  }, []);

  // Function to handle order status update
  const updateStatus = async (orderId, status) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      const data = await response.json();
    
      
      if (data) {
        toast.success(data.msg, { position: 'top-center' });
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status } : order
          )
        );
      } else {
        toast.error('Failed to update status', { position: 'top-center' });
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      toast.error('Failed to update status', { position: 'top-center' });
    }
  };

  // Function to delete an order
  const deleteOrder = async (orderId) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (data) {
        toast.success(data.msg, { position: 'top-center' });
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      } else {
        toast.error('Failed to delete order', { position: 'top-center' });
      }
    } catch (error) {
      console.error('Error deleting order:', error);
      toast.error('Failed to delete order', { position: 'top-center' });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Orders</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Items</th>
              <th className="px-4 py-2 text-left">Total Amount</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t">
                <td className="px-4 py-2">{order._id}</td>
                <td className="px-4 py-2">{order.customer.name}</td>
                <td className="px-4 py-2">
                  {order.items.map((item) => (
                    <div key={item.productId} className="flex items-center space-x-2">
                      <img
                        src={item.imageUrl}
                        alt={item.productId.name}
                        className="w-12 h-12 object-cover overflow-hidden"
                      />
                      <span>{item.name} x{item.quantity}</span>
                    </div>
                  ))}
                </td>
                <td className="px-4 py-2">${order.totalAmount}</td>
                <td className="px-4 py-2">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order._id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-4 py-2 flex gap-2 items-center justify-center pt-10">
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="text-red-500 hover:text-red-700 text-center"
                  >
                    Delete
                  </button>
                  <Link href={`/admin/orders/${order._id}`} passHref>
                    <button className="text-blue-500 hover:text-blue-700 text-center">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
