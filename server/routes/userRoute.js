import express from "express"
import { userRegister } from "../controllers/userController.js"

const userRouter = express.Router()

//Sample user route
userRouter.post('/register',userRegister)

export default userRouter