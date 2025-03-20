import connectToDatabase from "@/lib/databaseconnect";
import Newuser from "@/models/usermodel";
import Cartmodel from "@/models/cartmodel";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb'; // Ensure you import ObjectId

export async function PUT(request, { params }) {
  await connectToDatabase();
  const searchParams = await params;
  // console.log("searchparams", searchParams);

  const itemId = searchParams.id;
  const Searchquery = searchParams.value;
  const quantity = parseInt(searchParams.quantity); // Convert quantity to an integer

  try {
    if (!itemId) {
      return NextResponse.json({ msg: 'Item ID is required' }, { status: 400 });
    }

    // Find the cart for the user (you may need to get the user ID from the token or request)
    const token = request.cookies.get('authtoken')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
    }

    const data = jwt.verify(token, process.env.JWT_KEY);
    const userId = data._id;

    // Find the cart for the user
    const existingOrder = await Cartmodel.findOne({ customer: userId });
    if (!existingOrder) {
      return NextResponse.json({ msg: 'Cart not found' }, { status: 404 });
    }
    // console.log("existingorder", existingOrder);

    // Convert itemId to ObjectId for comparison
    const matchedItem = existingOrder.items.find(item => item._id.equals(new ObjectId(itemId)));

    // console.log("matchedItem", matchedItem);

    if (matchedItem) {
      if(Searchquery==='decrement'){
        if (matchedItem.quantity > 1) {
          matchedItem.quantity -= 1; // Decrement quantity
        } else {
          return NextResponse.json({ msg: 'Cannot decrement quantity below 1' }, { status: 400 });
        }
        await existingOrder.save();
        return NextResponse.json({ msg: 'Item quantity decrement successfully', existingOrder });
      }
      if(Searchquery=='increment'){
        if (matchedItem.quantity < 10) {
          matchedItem.quantity += 1; // Decrement quantity
        } else {
          return NextResponse.json({ msg: 'Cannot increment quantity above 10' }, { status: 400 });
        }
        await existingOrder.save();
        return NextResponse.json({ msg: 'Item quantity increment successfully', existingOrder });
      }
   
    
    }

    return NextResponse.json({ msg: 'Item not found in cart' }, { status: 404 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ msg: 'Server error' }, { status: 500 });
  }
}

// export async function PUT(request, { params }) {
//   await connectToDatabase();
//   const searchParams = await params;
//   console.log("searchparams", searchParams);

//   const itemId = searchParams.id;
//   const quantity = parseInt(searchParams.quantity); // Convert quantity to an integer

//   try {
//     if (!itemId) {
//       return NextResponse.json({ msg: 'Item ID is required' }, { status: 400 });
//     }

//     // Find the cart for the user (you may need to get the user ID from the token or request)
//     const token = request.cookies.get('authtoken')?.value;
//     if (!token) {
//       return NextResponse.json({ error: 'Authentication token is missing' }, { status: 401 });
//     }

//     const data = jwt.verify(token, process.env.JWT_KEY);
//     const userId = data._id;

//     // Find the cart for the user
//     const existingOrder = await Cartmodel.findOne({ customer: userId });
//     if (!existingOrder) {
//       return NextResponse.json({ msg: 'Cart not found' }, { status: 404 });
//     }
//     console.log("existingorder", existingOrder);

//     // Convert itemId to ObjectId for comparison
//     const matchedItem = existingOrder.items.find(item => item._id.equals(new ObjectId(itemId)));

//     console.log("matchedItem", matchedItem);

//     if (matchedItem) {
//       if (matchedItem.quantity > 1) {
//         matchedItem.quantity -= 1; // Decrement quantity
//       } else {
//         return NextResponse.json({ msg: 'Cannot decrement quantity below 1' }, { status: 400 });
//       }
//       await existingOrder.save();
//       return NextResponse.json({ msg: 'Item quantity decremented successfully', cart: existingOrder });
//     }

//     return NextResponse.json({ msg: 'Item not found in cart' }, { status: 404 });
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     return NextResponse.json({ msg: 'Server error' }, { status: 500 });
//   }
// }