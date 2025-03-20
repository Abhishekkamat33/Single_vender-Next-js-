import connectToDatabase from "@/lib/databaseconnect";
import Newuser from "@/models/usermodel";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
export async function DELETE(request,{params}) {
const searchParams= await params;
const userId= searchParams.id
console.log(userId);



  
    await connectToDatabase();
  
    try {
      // Check if the item ID is provided
        if (!userId) {
            return NextResponse.json({ error: 'User ID is missing' }, { status: 400 });
        }
      // Find the cart for the user (you may need to get the user ID from the token or request)
      const token = request.cookies.get('authtoken')?.value;
      if (!token) {
        return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
      }
  
    const data = await Newuser.findByIdAndDelete(userId);
  
   
     
      return NextResponse.json({ msg: 'user deleted' });
    } catch (error) {
      return NextResponse.json({ msg: 'Failed to delete users', error: error.message }, { status: 500 });
    }
  }

  export async function GET(request) {
    const url = new URL(request.url);  // Get the full URL from the request object
  const id = url.pathname.split('/').pop(); // Extract the 'id' from the URL path
  

    try {
      await connectToDatabase();
  
      const user = await Newuser.findById(id).select('-password'); 
      return NextResponse.json({user} );
      
    } catch (error) {
  
      // If the token is invalid or expired
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }
  }
  
  
  
  export  async function PUT(req, { params }) {
    try {
      const searchParams = await params;
    const itemId = searchParams.id
  console.log(itemId);
  
    const data= await req.json();

    console.log(data);
    
    
        await connectToDatabase();

       const result= await Newuser.findByIdAndUpdate(itemId,{
        name:data.name,
        email:data.email,
        role:data.role
       });
         
  
  
          return NextResponse.json({ msg: 'User updated successfully' });
        } catch (error) {
          return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
        }
      }
  
