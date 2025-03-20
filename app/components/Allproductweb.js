
'use client'
import { useEffect, useState } from 'react';

const Product =()=> {
const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products'); // Assuming your API route is `/api/products`
        const data = await response.json();

        if (response.ok) {
          setProducts(data.products);
        } else {
          setError(data.message || 'Failed to fetch products');
        }
      } catch (err) {
        setError('Error: ' + err.message);
      }
    }

    fetchProducts();
  }, []);
}


export default Product;
