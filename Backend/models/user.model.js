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
        lowercase: true,
        required: true
    },
    password: {
        type: String
    }
}, { timestamps: true })


const userModel = mongoose.model("User", UserSchema);
module.exports = userModel;