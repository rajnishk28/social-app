const express = require("express");
const router = express.Router();
const { signUp, login,getUserProfile,
    getUserPublicProfile,updateUserDetails} = require("../controller/auth.Controller");
const {checkUser} =require("../middleware/checkUser");
const multer =require("multer");
const upload = multer({ dest: 'uploads/' });



router.post("/signup", signUp);
router.post("/login", login);
router.get("/profile",checkUser, getUserProfile);
router.get("/profile/:userName", getUserPublicProfile);
router.put("/profile",checkUser,upload.single("file"),updateUserDetails);



module.exports = router;

