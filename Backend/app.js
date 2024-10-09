const express=require("express");
const app=express();
const filerouter=require("./routes/file.route");
const AuthRoutes =require("./routes/auth.routes")
const cors=require("cors");
app.use(cors());


app.use("/file",filerouter);
app.use("/auth",AuthRoutes);



module.exports=app;