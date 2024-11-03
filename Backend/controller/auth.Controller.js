const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//signUp user Controller
const signUp = async (req, res) => {
    const { name, email, userName, password } = req.body;
    try {
        if (!name || !email || !userName || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required details",
            });
        }

        // Check if user already exists by email or username
        const existingUser = await User.findOne({ $or: [{ userName }, { email }] });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this username or email already exists",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save to database
        const newUser = new User({
            name,
            email,
            userName,
            password: hashedPassword,
        });

        await newUser.save();

        // Respond without password
        const {password:_,...user} = newUser._doc ;
       

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

//login controller
const login = async (req, res) => {
    try {
        const { email, userName, password } = req.body;
        if ((!email && !userName) || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide either email or username, and password",
            });
        }

        // Find the user by either email or username
        const user = await User.findOne({
            $or: [{ email }, { userName }],
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid password",
            });
        }
        // User is authenticated; generate a JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );
        // Respond with user details, excluding password
        const { password: _, ...userData } = user._doc;
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: { user:userData, token }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = {
    signUp,
    login,
};
