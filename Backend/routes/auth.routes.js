const express = require("express");
const router = express.Router();
const { signUp } = require("../controller/auth.Controller");



router.post("/signup", signUp);



module.exports = router;

