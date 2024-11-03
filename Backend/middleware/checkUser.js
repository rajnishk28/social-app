const jwt=require("jsonwebtoken");

const checkUser = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Token Not Found",
            });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=> {
            if (err) {
              res.status(403).send({ success: false, message: "Failed to authenticate user." })
            } else {
                // console.log(decoded)
              req.user = decoded
              next()
            }
        });

    } catch (error) {
        console.log(error)
    }

}


module.exports={
    checkUser
}