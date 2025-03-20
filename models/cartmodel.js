// models/Order.js
import mongoose from 'mongoose';

// Define the schema for the order
const CartSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  items: [
    {
      productId: {
        type: String,
        required: true
      },
      image: {
        type: String,  // Fixed here
        required: true
      },
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model based on the schema
const Cartmodel = mongoose.models.Cartmodel || mongoose.model('Cartmodel', CartSchema);

export default Cartmodel;
