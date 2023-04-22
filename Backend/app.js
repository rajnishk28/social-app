const express=require("express");
const app=express();
const filerouter=require("./routes/file.route");
const cors=require("cors");
app.use(cors());


app.use("/file",filerouter);



module.exports=app;