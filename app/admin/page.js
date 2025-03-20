'use client'
import { useEffect, useState } from 'react';
import Layout from './layout'; // Assuming you have a Layout component

import { useRouter } from 'next/router';

const Dashboard = () => {
  const [pending, setPending] = useState(0);
  const [shipped, setShipped] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [orderStatus, setOrderStatus] = useState({ Pending: 0, Shipped: 0, Delivered: 0, Cancelled: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('/api/orders');
        const data = await res.json();

        
        if (data) {
         
          setTotalOrders(data.orders.length);
          setTotalRevenue(
            data.orders.reduce((sum, order) => sum + order.totalAmount, 0)
          );
          let num=0;
          let shipped=0;
          let delivered=0;
          data.orders.forEach(element => {
           
            
            if(element.status == "Pending"){
             num= num+1;
              setPending(num);
            }
            if(element.status == "Delivered"){
              delivered= delivered+1;
               setDelivered(delivered);
             }
             if(element.status == "Shipped"){
              shipped= shipped+1;
               setShipped(shipped);
             }
           
            
          });
           
        }
         

   
    };

    fetchData();
  }, []);



  return (
    <Layout>
      <div className="bg-white p-6 rounded-lg shadow-lg  h-[80vh]">
        <h2 className="text-3xl font-semibold text-gray-800">Dashboard</h2>

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-blue-800">Total Orders</h3>
            <p className="text-4xl font-bold text-blue-600">{totalOrders}</p>
          </div>
          <div className="bg-green-100 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-green-800">Total Revenue</h3>
            <p className="text-4xl font-bold text-green-600">
              ${totalRevenue.toFixed(2).toLocaleString()}
            </p>
          </div>
          <div className="bg-yellow-100 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-yellow-800">Pending Orders</h3>
            <p className="text-4xl font-bold text-yellow-600">{pending}</p>
          </div>
          <div className="bg-blue-100 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-blue-800">Shipped Orders</h3>
            <p className="text-4xl font-bold text-blue-600">{shipped}</p>
          </div>
          <div className="bg-green-100 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-green-800">Delivered Orders</h3>
            <p className="text-4xl font-bold text-green-600">{delivered}</p>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Dashboard;
