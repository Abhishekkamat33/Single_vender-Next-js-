import mongoose from "mongoose";

// Define the user schema with added validations
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true, 
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']  // Email regex validation
    },
    password: { 
        type: String, 
        required: true, 
        minlength: [6, 'Password must be at least 6 characters long'] // Minimum length for password
    },
    role: { 
        type: String, 
        default: 'user' 
    }
}, { timestamps: true });

// Ensure that the model is not redefined
const Newuser = mongoose.models.Newuser || mongoose.model('Newuser', userSchema);

export default Newuser;
