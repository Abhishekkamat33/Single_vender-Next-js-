import connectToDatabase from "@/lib/databaseconnect";
import Newuser from "@/models/usermodel";
import Cartmodel from "@/models/cartmodel";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
import Product from "@/models/productmodel";
export async function DELETE(request, { params }) {
    const searchParams = await params;
    const itemId = searchParams.id

    console.log(itemId);


    await connectToDatabase();

    try {
        // Check if the item ID is provided
        if (!itemId) {
            return NextResponse.json({ msg: 'Item ID is required' }, { status: 400 });
        }

        // Find the cart for the user (you may need to get the user ID from the token or request)
        const token = request.cookies.get('authtoken')?.value;
        if (!token) {
            return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
        }

        const data = jwt.verify(token, process.env.JWT_KEY);
        if (data.role === 'admin') {

            await Product.findByIdAndDelete(itemId);

            return NextResponse.json({ msg: 'product deleted successfully' });

        }


    } catch (error) {
        return NextResponse.json({ msg: 'Failed to remove product', error: error.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    const searchParams = await params;
    const itemId = searchParams.id

    const data= await request.json();
    
    //  console.log(data.mediaurl);
     
    try {
        await connectToDatabase();

       const result= await Product.findByIdAndUpdate(itemId, {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            category: data.category,
            imageUrl: data.mediaurl,
       });
//   console.log(result);
  

        console.log('product updated successfully');
        
    
        return NextResponse.json({ msg: 'product updated successfully' });
        
    } catch (error) {
        return NextResponse.json({ msg: 'Failed to update product', error: error.message }, { status: 500 });
    }



}