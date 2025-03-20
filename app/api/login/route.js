import connectToDatabase from "@/lib/databaseconnect";
import Newuser from "@/models/usermodel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


export async function POST(req) {
    try {

        const result = await req.json(); // Parse the request body
        // console.log("Received result:", result);

        const { email, password } = result;

        // Connect to the database
        await connectToDatabase();

        const existingUser = await Newuser.findOne({ email });
        // console.log("login password", existingUser ? existingUser.password : "No user found");


        if (existingUser) {
            // return NextResponse.json({ msg: 'User not found' }, { status: 404 });


            // Compare the plain text password with the hashed password
            const comparePassword = bcrypt.compareSync(password, existingUser.password);

            // console.log(comparePassword); // Logs `true` or `false`

            if (comparePassword) {
                const token = jwt.sign({
                    _id: existingUser._id,
                    role: existingUser.role,
                    name: existingUser.name
                }, process.env.JWT_KEY);
                // console.log(token);
                const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
                // console.log(expires);
                
                const response = NextResponse.json({ msg: 'Login success', status: 200, user: existingUser });

                response.cookies.set("authtoken", token, {
                    expires: expires,
                    httpOnly: true
                });

                return response;
            } else {
                // Password is incorrect
                return NextResponse.json({ msg: 'Invalid password' }, { status: 401 });
            }
        }
        else {
            return NextResponse.json({ msg: 'No user registered with this email' }, { status: 404 });
        }

    } catch (error) {
        // Return an error response if the connection fails
        return NextResponse.json(
            { success: false, message: 'Database connection failed!', error: error.message },
            { status: 500 }
        );
    }
}
