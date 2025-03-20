'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

const NewUser = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);
//  console.log(user);
 
    try {
      // Send POST request to API route
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error creating user');
      }

      setSuccess(true); // Show success message
      setUser({ name: '', email: '', password: '', role: 'user' }); // Reset form
      setTimeout(() => {
        router.push('/admin/users'); // Redirect to users list after success
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      setError(err.message); // Set error message if failed
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  
  return (
   
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Add New User</h2>

        {success && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded">
            User created successfully!
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
            Error: {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-2 border rounded-lg text-gray-800"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className={`mt-4 px-6 py-2 text-white rounded-lg ${
              isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Save User'}
          </button>
        </form>
      </div>

  );
};

export default NewUser;
