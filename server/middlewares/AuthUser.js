import jwt from "jsonwebtoken";


const authUser = async (req, res, next) => {
    const {token}=req.cookies

    if(!token){
        return res.json({success:false, message:"No authentication token, access denied"})
    }
    try {
        const decoded= jwt.verify(token, process.env.JWT_SECRET)
        if(decoded.id){
            req.userId=decoded.id
        }else{
            
            return res.json({success:false, message:"Not Authorized Please Login"})
        }
        next()
    }catch(error){
        console.log(error.message)
        return res.json({success:false, message:error.message})
    }
}

export default authUser