import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const isAdmin = async (authtoken) => {
    try {
        // Verify the JWT token using the key from environment variables
        // console.log("authtoken:", authtoken); // Log the authtoken to check its value
        if (!authtoken) {
            console.error("No JWT token provided.");
            return false;
        }

        const { payload } = await jwtVerify(authtoken, new TextEncoder().encode(process.env.JWT_KEY));

        // Check if the user has an 'admin' role in the payload
        return payload.role === 'admin';
    } catch (error) {
        console.error("JWT verification failed:", error);
        return false;
    }
}

export async function middleware(request) {
    console.log("Middleware triggered"); // Log to the terminal
    
    // Get the authtoken cookie from the request
    const authtoken = request.cookies.get('authtoken')?.value;  // Ensure we're getting the token properly

    // Allow access to specific API routes and pages
    if (request.nextUrl.pathname === '/api/login' || 
        request.nextUrl.pathname === '/api/signup' || 
        request.nextUrl.pathname === '/api/logout' || 
        request.nextUrl.pathname === '/api/product' || 
        request.nextUrl.pathname === '/api/admin') {
        return NextResponse.next(); // Allow the API request to continue
    }

    // If logged in but trying to access login/signup page, redirect home
    const loggedInUserNotAccessPath = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup';
         
    if (loggedInUserNotAccessPath && authtoken) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // If not logged in and trying to access protected pages, redirect to login
    if (!authtoken && request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/signup') {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (authtoken && !await isAdmin(authtoken) && request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    // If logged in and trying to access homepage, check for admin
    if (authtoken && await isAdmin(authtoken) && request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    // Continue with the normal request if no conditions were met
    return NextResponse.next();
}

export const config = {
    matcher: [  
        '/login',
        '/signup',
        '/',
        '/admin',  
        '/admin/:path*',
        '/api/:path*', // Matches API routes
        '/allproduct', // Matches the specific path "/allproduct"
    ]
}
