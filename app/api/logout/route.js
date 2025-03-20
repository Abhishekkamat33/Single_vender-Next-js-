import { NextResponse } from "next/server";

 


 export async function POST(request) {
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const response= NextResponse.json({
        msg:'logout',sucess:true});
    
        response.cookies.set('authtoken',"" ,{
            expires:expires
        })
        return response
 } 