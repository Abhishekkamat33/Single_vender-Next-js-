// import Layout from '../components/Layout';
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';



const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const fetchuser =async()=>{

      try {
        const response = await fetch('http://localhost:3000/api/users'); // Your API endpoint
        const data = await response.json();
       setUsersData(data.user);
      } catch (error) {
        console.log("Error fetching cart data:", error);
        setUsersData([]);
      }

  
  }
   useEffect(() => {
    fetchuser();
    }, []); // Fetch on component mount

    const handleDelete = async (userId) => {
      try {
          const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.msg || 'Failed to delete item');
          }
          
  
          const data = await response.json();
          toast.success(data.msg, {
              position: 'top-center',
          });
  fetchuser();

      } catch (error) {
          toast.error(error.message, {
              position: 'top-center',
              autoClose: 5000,
          });
      }
  };

  return (
  
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
        <div className="mt-4">
          <Link href="/admin/users/addnewusers">
            <p className="text-blue-600 hover:text-blue-800 text-lg mb-4 inline-block">
              + Add New User
            </p>
          </Link>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-gray-700">Role</th>
                <th className="px-4 py-2 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-2 text-gray-800">{user.name}</td>
                  <td className="px-4 py-2 text-gray-600">{user.email}</td>
                  <td className="px-4 py-2 text-gray-600">{user.role}</td>
                  <td className="px-4 py-2">
                    <Link href={`/admin/users/${user._id}`}>
                      <p className="text-yellow-500 hover:text-yellow-700 mr-4">Edit</p>
                    </Link>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Users;
