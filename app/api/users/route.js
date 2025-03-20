import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import Newuser from "@/models/usermodel";
import connectToDatabase from "@/lib/databaseconnect";
export async function GET(request) {
  try {
    await connectToDatabase();

     const user = await Newuser.find();
    return NextResponse.json({user} );
    
  } catch (error) {

    // If the token is invalid or expired
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }
}




export async function POST(req) {
    try {
      await connectToDatabase();
      const {email,password,name,role} = await req.json();
    //   console.log(email,password,name,role);
      
        const user = await Newuser.create({email,password,name,role});
        // console.log(user);
        
      return NextResponse.json({msg: 'User created successfully', status: 200, user: user});
      
    } catch (error) {
  
      // If the token is invalid or expired
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
  }