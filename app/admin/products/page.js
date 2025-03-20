// src/pages/admin/products.js
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'react-toastify';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products from your API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/product'); // Assuming your API route is `/api/product`
        const data = await response.json();

        if (response.ok) {
          setProducts(data.products);
          setLoading(false);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Error: ' + err.message);
      }
    }

    fetchProducts();
  }, []);




  const handleDelete = async (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      await fetch(`/api/product/${productId}`, { method: 'DELETE' });

      toast.success('Product deleted successfully');
      setProducts(products.filter((product) => product._id !== productId));
    }
  };


  return (
    <div className="p-6 relative">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Link href="/admin/products/addnewproduct">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add Product
        </button>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <motion.table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Stocks</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <motion.tr key={product._id} whileHover={{ scale: 1.01 }} className="border border-gray-300">
                <td className="border border-gray-300 p-2">
                  <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
                </td>
                <td className="border border-gray-300 p-2">{product._id}</td>
                <td className="border border-gray-300 p-2">{product.name}</td>
                <td className="border border-gray-300 p-2">{product.stock}</td>
                <td className ="border border-gray-300 p-2">{product.category}</td>
                <td className="border border-gray-300 p-2">
                  <div className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">
                    {product.description}
                  </div>
                </td>
                <td className="border border-gray-300 p-2">${product.price}</td>
                <td className="border border-gray-300 p-2">
                 <Link href={`/admin/products/${product._id}`} ><p className="text-blue-500 text-center" >Edit</p> </Link>
                  <button className="text-red-500 ml-2" onClick={() => handleDelete(product._id)}>Delete</button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      )}
   
    </div>
  );
};

export default ProductsPage;