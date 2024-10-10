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

//login controller
const login = async (req, res) => {
    const { email, userName, password } = req.body;

    try {
        if ((!email || !userName) && !password) {
            return res.status(400).json({
                success: false,
                message: "please fill Both fields"
            });
        }
        //check Existing user
        const user = await User.find({ $or: [email, userName] });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User Not found"
            })
        };

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        
        if (!isPasswordMatch) {
            return res.status(200).json({
                success: false,
                message: "Invalid Password"
            })
        };

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: { user }
        });



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server Error",
            error: error
        })
    }
}





module.exports = {
    signUp,
    login
}