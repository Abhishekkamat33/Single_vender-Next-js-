

import connectToDatabase from '@/lib/databaseconnect';
import Order from '@/models/ordermodel';
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server';


export async function PUT(request, { params }) {
    const searchParams = await params;
    const itemId = searchParams.id

    const data= await request.json();

     
    try {
        await connectToDatabase();
  
       const res= await Order.findByIdAndUpdate(itemId,{
        status:data.status,
       })
      
        return NextResponse.json({ msg: 'product updated successfully' });
        
    } catch (error) {
        return NextResponse.json({ msg: 'Failed to update product', error: error.message }, { status: 500 });
    }



}

export async function DELETE(request, { params }) {
    const searchParams = await params;
    const itemId = searchParams.id



    await connectToDatabase();

    try {
        // Check if the item ID is provided
  

        // Find the cart for the user (you may need to get the user ID from the token or request)
        const token = request.cookies.get('authtoken')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
        }

        const data = jwt.verify(token, process.env.JWT_KEY);
        if (data.role === 'admin') {
            
            await Order.findByIdAndDelete(itemId);

            return NextResponse.json({ msg: 'product deleted successfully' });

        }


    } catch (error) {
        return NextResponse.json({ msg: 'Failed to remove product', error: error.message }, { status: 500 });
    }
}

export async function GET(req, { params }) {
    try {
        const searchParams = await params;
        
        
        const userId = searchParams.id
  
      
      
      // Connect to the database
      await connectToDatabase();
  
      // Fetch all products from the database
      const orders = await Order.find({customer:userId})
      
   console.log(orders);
   
      
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