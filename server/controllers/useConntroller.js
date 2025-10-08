import User from "../models/User"
import validator from "validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//USER REGISTER ROUTE

const cookieOptions = {
    httpOnly:true,// Prevents client-side JS from reading the cookie
    secure:process.env.APP_ENV  === "production", // Ensures the cookie is only sent over HTTPS
    sameSite:process.env.APP_ENV  === "production" ? "none" : "strict", // Controls when cookies are sent "none" allows cross-site cookies, "strict" allows only same-site cookies
}

export const userRegister = async (req , res)=>{
    try{
        const {name,email,password} = req.body
        //checking if user is already exist or not
        const exists = await User.findOne({email})
        if(exists){
            return res.json({success:false, message : "User already exists"})
        }
        //Validate password and checking strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message : "Please enter a valid email"}) 
        }
        if(password.length < 8){
            return res.json({success:false, message : "Please enter a strong password"}) 
        }
        //Hash user Password
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expireIn: "7d"})
        
        res.cookie("token" , token, {
            ...cookieOptions,
            maxAge:7 * 24 * 50 * 60 * 1000 // Cookie experation time 7 days
        })

        return res.json({success:true, user:email , name:user.name})

    }catch (error){
        console.log(error.message)
        res.json({success:false, message : error.message})
    }
}