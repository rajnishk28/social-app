const express = require("express");
const router = express.Router();
const fs = require("fs");
const File = require("../models/file");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dkicdea3d",
  api_key: "942236147372893",
  api_secret: "OML4CPY_2TOC76vqPq58AfxCnXA",
});

const multipart = require("connect-multiparty");
const multipartMiddleware = multipart({ uploadDir: "./uploads" });

router.get("/", function (req, res) {
  File.find()
    .then((data) => {
      res.json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/filecloudinary", multipartMiddleware, function (req, res) {
  cloudinary.uploader.upload(req.files.file.path, function (error, result) {
    if (error) {
      res.json({
        message: "Error",
        error: error,
      });

      return;
    }
    const file = new File({
      title: req.body.title,
      description: req.body.description,
      file: result.url,
    });

    file
      .save()
      .then((resu) => {
        res.json({
          message: "Success",
          data: resu,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    fs.unlinkSync(req.files.file.path);
  });
});

module.exports = router;
