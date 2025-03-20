'use client'

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function ProductPage() {
    const Router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [mediaurl, setMediaurl] = useState('');  // Corrected state name for image URL
  const [isUploading, setIsUploading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const { id } = useParams();  // Get the `id` from the URL

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`/api/product`); // Adjust if necessary
        const data = await response.json();

        // console.log(data);

        if (response.ok) {
          // Find the product that matches the ID from the URL
          data.products.forEach(element => {
            if (element._id === id) {
              setName(element.name);
              setDescription(element.description);
              setPrice(element.price);
              setStock(element.stock);
              setCategory(element.category);
              setMediaurl(element.imageUrl); // Set the existing image URL
            }
          });
        } else {
          console.log('Error: ' + data.message);
        }
      } catch (err) {
        console.log('Error: ' + err.message);
      }
    }

    fetchProducts();
  }, [id]);  // Fetch data when `id` changes

  // Handle the image upload to Cloudinary
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'my store'); // Cloudinary upload preset
      formData.append('cloud_name', 'drrcvdeb3'); // Cloudinary cloud name

      fetch(`https://api.cloudinary.com/v1_1/drrcvdeb3/image/upload`, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setIsUploading(false);
          setMediaurl(data.url); // Set the mediaurl state with the uploaded image URL
        })
        .catch((err) => {
          setIsUploading(false);
          console.error('Image upload failed:', err);
        });
    }
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mediaurl) {
      setResponseMessage('Please upload an image first.');
      return;
    }

   
    
    const productData = {
      name,
      description,
      price,
      stock,
      category,
      mediaurl, // Use mediaurl for the image URL
    };

    // console.log(productData);

    try {
      const response = await fetch(`/api/product/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const result = await response.json();
    //   console.log(result);

      if (response.ok) {
     toast.success('Product updated successfully');
     Router.push('/admin/products');
      } else {
        setResponseMessage(result.message || 'Something went wrong');
      }
    } catch (error) {
      setResponseMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Edit Product</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Product Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-lg font-medium text-gray-700">Price</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="stock" className="block text-lg font-medium text-gray-700">Stock</label>
          <input
            id="stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange} // Corrected the onChange handler
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {isUploading && <p className="mt-2 text-gray-500">Uploading...</p>}
        </div>

        {mediaurl && (
          <div className="mb-4">
            <img src={mediaurl} alt="Product" className="w-48 h-48 object-cover rounded-md mx-auto" />
            <p className="text-center text-green-500 mt-2">Image uploaded successfully!</p>
          </div>
        )}

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Product
        </button>
      </form>

    </div>
  );
}
