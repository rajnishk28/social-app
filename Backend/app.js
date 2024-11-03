const express = require("express");
const app = express();
const AuthRoutes = require("./routes/auth.routes");
const fileUploadRoutes = require("./routes/file.routes")
const profileRoutes = require("./routes/profile.routes")
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/auth", AuthRoutes);
app.use("/file", fileUploadRoutes);
app.use("/user", profileRoutes);




module.exports = app;