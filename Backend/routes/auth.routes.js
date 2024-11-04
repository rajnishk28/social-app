const express = require("express");
const router = express.Router();
const { signUp, login,getUserProfile,
    getUserPublicProfile,updateUserDetails} = require("../controller/auth.Controller");
const {checkUser} =require("../middleware/checkUser")



router.post("/signup", signUp);
router.post("/login", login);
router.get("/profile",checkUser, getUserProfile);
router.get("/profile/:userName", getUserPublicProfile);
router.put("/profile",checkUser, updateUserDetails);



module.exports = router;

