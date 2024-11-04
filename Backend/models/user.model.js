const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    profileImage: { 
        type: String, 
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1b6NumgqTPC22Q_x8Dcb7XSYm0X9q-tgSA&s" 
    }
}, { timestamps: true })


const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;