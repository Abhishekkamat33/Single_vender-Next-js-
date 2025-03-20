import connectToDatabase from '@/lib/databaseconnect';
import Product from '@/models/productmodel';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the incoming JSON body
    const result = await req.json();

    console.log("reqbody", result);

    const { name, description, price, stock, category, mediaurl } = result;

    // Validate input
    // if (!name || !description || !price || !stock || !category || !imageUrl) {
    //   return NextResponse.json(
    //     { message: 'All fields are required' },
    //     { status: 400 }
    //   );
    // }

    // Create a new product document
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      category,
      imageUrl: mediaurl,
    });

    // Save product to the database
    await newProduct.save();

    // Return success response
    return NextResponse.json(
      { message: 'Product created successfully', product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    // Return error response if something goes wrong
    return NextResponse.json(
      { message: 'Error creating product', error: error.message },
      { status: 500 }
    );
  }
}



// get all products
export async function GET(req) {
    try {
      // Connect to the database
      await connectToDatabase();
  
      // Fetch all products from the database
      const products = await Product.find();
  
      // Return the products as a JSON response
      return NextResponse.json(
        { message: 'Products fetched successfully', products },
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