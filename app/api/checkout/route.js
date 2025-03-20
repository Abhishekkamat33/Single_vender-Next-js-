import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import jwt from 'jsonwebtoken';
import connectToDatabase from "@/lib/databaseconnect";
import cartmodel from '../../../models/cartmodel';
import Order from '@/models/ordermodel';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const res = await req.json();
    
    const token = req.cookies.get('authtoken')?.value;
   

    await connectToDatabase();
    // Check if token is missing
    if (!token) {
      return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
    }

    // Verify the token
    const data = jwt.verify(token, process.env.JWT_KEY);
    // console.log("Decoded token data:", data); // Log the decoded token data

const dataId= data._id;
    // console.log('res', res);
    
    const res2 = res.cartItems;

    // console.log('res2', res2);

    const cartdetails = await cartmodel.findOne({customer:dataId})
    // console.log("cart",cartdetails);
    // Create line items for the checkout session
    const lineItems = res2.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100), // Ensure price is in cents
      },
      quantity: item.quantity,
    }));

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3000/?success=true`, // Corrected URL
      cancel_url: `http://localhost:3000/?canceled=true`, // Corrected URL
    });


   //

   await new Order({
    customer: dataId,
    items: res2.map((item) => ({
      productId: item.productId,
      name: item.name,
      quantity: item.quantity,
      imageUrl:item.image,
      price: item.price,
      total: item.price * item.quantity,
    })),
    totalAmount: res2.reduce((acc, item) => acc + item.price * item.quantity, 0),
   }).save();


    // Clear the cart after successful checkout
    await cartmodel.findOneAndUpdate({customer:dataId},{ $set: { items: [] } })
  
  


    
    // Return the session URL to redirect the user
    return NextResponse.json({ url: session.url  }); // Return the session URL
  } catch (err) {
  
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}