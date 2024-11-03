const express = require("express");
const app = express();
const AuthRoutes = require("./routes/auth.routes");
const fileUpload=require("./routes/file.routes")
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/auth", AuthRoutes);
app.use("/file", fileUpload);




module.exports = app;