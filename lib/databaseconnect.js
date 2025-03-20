// lib/databaseconnect.js
import mongoose from "mongoose";

async function connectToDatabase() {
    const mongoUri = process.env.MONGO_URI; // Ensure this is defined

    if (!mongoUri) {
        console.error('MONGO_URI is not defined');
        throw new Error('MONGO_URI is not defined');
    }

    try {
        const connection = await mongoose.connect(mongoUri); // Removed deprecated options
        console.log('Connected to MongoDB');
        return connection;
    } catch (error) {
        console.error('Connection to database failed:', error.message);
    }
}

export default connectToDatabase;