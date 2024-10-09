const User = require("../models/user.model");
const bcrypt = require("bcrypt")


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
        //check if userAlready exist
        const existingUser = await User.findOne({ userName });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this userName already exists",
            });
        }
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //save to database
        const newUser = new User({
            name,
            email,
            userName,
            password: hashedPassword
        })
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "User registered successfully",
            user: newUser,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
}





module.exports={
    signUp
}