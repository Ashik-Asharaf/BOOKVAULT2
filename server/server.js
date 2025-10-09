import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import userRoute from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js"
import connectCloudinary from "./config/cloudinary.js"
import productRouter from "./routes/productRoute.js"
import cartRouter from "./routes/cartRoute.js"

const app=express() //Initalize Express Application
const port=process.env.PORT || 4000 //Define server port

await connectDB() //Establish MongoDB connection
await connectCloudinary() //Establish Cloudinary connection


//Allow multiple Origins
const allowedOrigins = ['http://localhost:5173/']

//Middleware Setup
app.use(express.json()) //Parse JSON request bodies
app.use(cookieParser()) //Cookie-parser middleware to parse HTTP request cookies
app.use(cors({
    origin:allowedOrigins,//Whitelist of allowed domains
    credentials:true //Allow cookies to be sent
})) 


//Root Endpoint to check API Status
app.get('/',(req,res)=>{
    res.send("API successfully connected")
})

app.use("/api/user", userRoute); //Routes for user-related operations
app.use("/api/admin", adminRouter); //Routes for admin-related operations
app.use("/api/product", productRouter); //Routes for product-related operations
app.use("/api/cart",cartRouter); //Routes for product-related operations

//Start the server
app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`))