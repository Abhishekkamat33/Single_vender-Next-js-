

import connectToDatabase from '@/lib/databaseconnect';
import Order from '@/models/ordermodel';
import { NextResponse } from 'next/server';


export async function GET(req) {
    try {
      // Connect to the database
      await connectToDatabase();
  
      // Fetch all products from the database
      const orders = await Order.find();
      
      
      // Return the products as a JSON response
      return NextResponse.json(
        { message: 'Products fetched successfully', orders },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
  
      // Return an error response if something goes wrong
      return NextResponse.json(
        { message: 'Error fetching products', error: error.message },
        { status: 500 }
      );
    }
  }


