const router = require("express").Router();
const { getAllProfileImage } = require("../controller/Profile.controller");
const { checkUser } = require("../middleware/checkUser")

router.get("/profile", checkUser, getAllProfileImage)

module.exports = router

