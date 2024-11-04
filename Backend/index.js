require("dotenv").config();
const express=require("express");
const app = require("./app");
const port = process.env.PORT || 9090;
const mongoose = require("mongoose");
const cors=require("cors");
app.use(cors());
app.use(express.json());
const path = process.env.MONGO_URL;

mongoose
  .connect(path)
  .then((data) => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, function () {
  console.log(`Server Running At Port ${port}`);
});
