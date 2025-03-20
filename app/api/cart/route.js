import connectToDatabase from "@/lib/databaseconnect";
import Newuser from "@/models/usermodel";
import Cartmodel from "@/models/cartmodel";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the request body
    const { cartItems, userId } = await req.json();
    console.log('Received cartItems:', cartItems);

    // Establish a connection to the database
    await connectToDatabase();

    // Check if the user exists
    const existingUser  = await Newuser.findById(userId);
    if (!existingUser ) {
      console.error('User  not found');
      return NextResponse.json({ success: false, message: 'User  not found' }, { status: 404 });
    }

    // Check if an order already exists for the user
    const existingOrder = await Cartmodel.findOne({ customer: userId });
    // console.log('Existing order:', existingOrder);

    if (existingOrder) {
      // If an order already exists, update the existing order
      const existingItemsMap = new Map(existingOrder.items.map(item => [item.productId, item]));
      // Update the existing order with new items
      cartItems.forEach(newItem => {
        const existingItem = existingItemsMap.get(newItem.productId);
        console.log('Existing item:', existingItem);
        
        if (existingItem) {
          // If the item exists in the order, only update the quantity
          existingItem.quantity += 1; // Increment the existing quantity
          // console.log('Updated existing item quantity:', existingItem);
        } else {
          // If the item doesn't exist in the order, add it as a new item
          existingOrder.items.push(newItem);
          console.log('Added new item:', newItem);
        }
      });

      // Save the updated order to the database
      await existingOrder.save();
      console.log('Order saved successfully');
      return NextResponse.json({ msg: "Cart updated successfully" }, { status: 200 });
    } else {
      // If no existing order, create a new one
      const newOrder = new Cartmodel({
        customer: userId,
        items: cartItems, // Assuming cartItems is already in the right format
      });

      // Save the new order to the database
      await newOrder.save();
      console.log('New order created and saved');
      return NextResponse.json({ msg: "New cart created successfully" }, { status: 200 });
    }
  } catch (error) {
    console.error('Error processing the cart:', error.message);
    return NextResponse.json(
      { success: false, message: 'Database connection failed or Order operation failed', error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const token = request.cookies.get('authtoken')?.value;

    await connectToDatabase();
    // Check if token is missing
    if (!token) {
      return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
    }

    // Verify the token
    const data = jwt.verify(token, process.env.JWT_KEY);
    // console.log("Decoded token data:", data); // Log the decoded token data

const dataId= data._id;
  
  
const cartdetails = await Cartmodel.findOne({customer:dataId})
// console.log(cartdetails);

    
    // Return the user information
    return NextResponse.json({cartdetails} );
    
  } catch (error) {
    console.error("Error:", error);
    // If the token is invalid or expired
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }
}
