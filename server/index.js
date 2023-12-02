const express=require("express");
const app=express();
require("dotenv").config();
 

const userroute=require("./routes/User");

const {connectdb}=require("./config/connectdb");
const {cloudinaryconnect}=require("./config/cloudinaryconnect");

const cookieParser=require("cookie-parser");
const cors=require("cors");
const fileupload=require("express-fileupload");

// database connect
connectdb();
// cloudinary connect
cloudinaryconnect();


// middlewares
app.use(express.json());
app.use(cookieParser());
// cors middleware when we use backend with different port no and frontend with different port no
app.use(cors());

// file upload middleware
app.use(
    fileupload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)

//mounting

app.use("/api/v1/user",userroute);

// default route
app.get("/",(req,resp)=>{
    return resp.json({
        success:true,
        message:"your server is up"
    })
})

const port=process.env.PORT;

// start the server
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

