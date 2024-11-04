const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { uploadToCloudinary } = require("../utils/fileUploadUtil")

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
        const { password: _, ...user } = newUser._doc;


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
            data: { user: userData, token }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

//User Profile
const getUserProfile = async (req, res) => {
    const email = req.user.email;
    try {
        const userProfile = await User.findOne({ email }).select('-password');

        if (!userProfile) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User details",
            data: userProfile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
//user Profile Public by userName
const getUserPublicProfile = async (req, res) => {
    const userName = req.params.userName;
    try {
        const userProfile = await User.findOne({ userName }).select('-password');

        if (!userProfile) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User details Found",
            data: userProfile
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

//update userProfile
const updateUserDetails = async (req, res) => {
    const { name, email, userName } = req.body;
    const file = req.file;
    const userId = req.user.userId;

    // Initialize updateData with provided fields
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (userName) updateData.userName = userName;

    try {
        // Handle file upload if file exists
        if (file) {
            const uploadResult = await uploadToCloudinary(file.path);
            updateData.profileImage = uploadResult.url;
        }

        const updatedDetails = await User.findByIdAndUpdate(
            userId,
            updateData,
            { new: true }
        );

        return res.status(200).json({
            success: true,
            data: updatedDetails
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


module.exports = {
    signUp,
    login,
    getUserProfile,
    getUserPublicProfile,
    updateUserDetails
};
