'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const EditUser = () => {
  const router = useRouter();
 const { id } = useParams(); 
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [loading, setLoading] = useState(false);

  // Fetch user details when the page is loaded
  const fetchUser = async () => {
    if (!id) return; // Wait until we have an ID
    try {
      const response = await fetch(`/api/users/${id}`);
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.log('Error fetching user:', error);
      toast.error('Failed to fetch user data', {
        position: 'top-center',
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(user);
    
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to update user');
      }

      const data = await response.json();
      toast.success(data.msg, {
        position: 'top-center',
        autoClose: 5000,
      });

      router.push('/admin/users'); // Redirect back to users list

    } catch (error) {
      toast.error(error.message, {
        position: 'top-center',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Edit User</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="mb-4 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update User'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
