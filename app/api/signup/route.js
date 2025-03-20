// pages/api/test-connection.js
import connectToDatabase from "@/lib/databaseconnect";
import Newuser from "@/models/usermodel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function GET(req) {
    try {
        // Ensure this function connects to your MongoDB
        await connectToDatabase(); 
        
        // Fetch users from the database
        const users = await Newuser.find();
        console.log(users);

        // Return the response with the user data
        return NextResponse.json({ msg: "Database connected", users });
    } catch (error) {
        // Return an error response if the connection fails
        return NextResponse.json(
            { success: false, message: 'Database connection failed!', error: error.message },
            { status: 500 }
        );
    }
}

// write a code for 
export async function POST(req) {
    try {
        const result = await req.json(); // Parse the request body
        console.log("Received result:", result);

        // Destructure the result to get the user info
        const { email, password, name } = result;
        
        // Connect to the database
        await connectToDatabase();

        const existingUser = await Newuser.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ msg: 'Email already in use' }, { status: 400 });
        }
      
       
        if (password.length < 6 || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return NextResponse.json({ msg: 'Password must be at least 6 characters long, contain a number, and include a special character' }, { status: 400 });
        }
        
        // Hash the password before saving to DB
        const hashedpassword = bcrypt.hashSync(password, 10);
        
        // Create a new user with the data
        const newUser = await Newuser.create({
            email,
            name,
            password: hashedpassword
        });
        console.log("Created user:", newUser);

        // Save the new user (this might not be necessary if `create()` already does that)
        await newUser.save();

        // Respond with success
        return NextResponse.json({ msg: "User created", user: newUser });
    } catch (error) {
        // Handle errors and return an appropriate response
        console.log("Error:", error);
        return NextResponse.json(
            { success: false, message: 'Database connection failed!', error: error.message },
            { status: 500 }
        );
    }
}