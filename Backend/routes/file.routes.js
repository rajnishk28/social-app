const { uploadSingleFile, uploadMultipleFiles } = require("../controller/fileUpload.controller");
const multer = require('multer');
const router = require("express").Router();
const {checkUser} =require("../middleware/checkUser")
const upload = multer({ dest: 'uploads/' });


router.post("/uploadSingle",checkUser,upload.single("file"),uploadSingleFile);





module.exports = router;