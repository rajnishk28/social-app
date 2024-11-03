const File = require("../models/file.model");

const getProfile = async (req, res) => {
    try {
        const userId = req.user.userId;
        const profile = await File.find({ user:userId });
        

        if (profile.length==0) {
            return res.status(400).json({
                success: false,
                message: "No Images found"
            })
        };

        return res.status(200).json({
            success: true,
            data: profile
        })

    } catch (error) {
        return res.status(500).json({
            message: "internal server error",
            error: error.message

        })
    }
}

module.exports = {
    getProfile
}