const router = require("express").Router();
const { getProfile } = require("../controller/Profile.controller");
const { checkUser } = require("../middleware/checkUser")

router.get("/profile", checkUser, getProfile)

module.exports = router

