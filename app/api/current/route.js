import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import Newuser from "@/models/usermodel";
import connectToDatabase from "@/lib/databaseconnect";
export async function GET(request) {
  try {
    await connectToDatabase();
    const token = request.cookies.get('authtoken')?.value;

   
    // Check if token is missing
    if (!token) {
      return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
    }

    // Verify the token
    const data = jwt.verify(token, process.env.JWT_KEY);
    // console.log("Decoded token data:", data); // Log the decoded token data

const dataId= data._id;
   
    
    // Find the user by ID from the decoded token
    // console.log("User  ID from token:", data._id); // Log the user ID
    const user = await Newuser.findById(dataId).select('-password');

    // If the user is not found
    if (!user) {
      // console.log("User  not found in the database."); // Log if user is not found
      return NextResponse.json({ error: 'User  not found' }, { status: 404 });
    }
 

    // console.log(user);
    
    // Return the user information
    return NextResponse.json({user} );
    
  } catch (error) {

    // If the token is invalid or expired
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }
}