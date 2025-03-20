import connectToDatabase from "@/lib/databaseconnect";
import Newuser from "@/models/usermodel";
import Cartmodel from "@/models/cartmodel";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
export async function DELETE(request,{params}) {
const searchParams= await params;
const itemId= searchParams.id


  
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
      const userId = data._id;
  
      // Find the cart for the user
      const existingOrder = await Cartmodel.findOne({ customer: userId });
      if (!existingOrder) {
        return NextResponse.json({ msg: 'Cart not found' }, { status: 404 });
      }
  
      // Find the item in the cart and remove it
      const itemIndex = existingOrder.items.findIndex(item => item._id.toString() === itemId);
      if (itemIndex === -1) {
        return NextResponse.json({ msg: 'Item not found in cart' }, { status: 404 });
      }
  
    //   Remove the item from the cart
      existingOrder.items.splice(itemIndex, 1);
      await existingOrder.save(); // Save the updated cart
  
      return NextResponse.json({ msg: 'Item removed from cart successfully' });
    } catch (error) {
      return NextResponse.json({ msg: 'Failed to remove item from cart', error: error.message }, { status: 500 });
    }
  }