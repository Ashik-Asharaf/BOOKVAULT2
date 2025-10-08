import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"

const app=express() //Initalize Express Application
const port=process.env.PORT || 4000 //Define server port

await connectDB() //Establish MongoDB connection

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

//Start the server
app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`))