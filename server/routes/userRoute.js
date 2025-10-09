import express from "express";
import { isAuth, logout, userLogin, userRegister } from "../controllers/useController.js"; // <-- fixed filename
import authUser from "../middlewares/AuthUser.js"

const router = express.Router();

//Sample user route
router.post("/register", userRegister)
router.post("/login", userLogin)
router.post("/logout", logout)
router.get("/is-auth", authUser,isAuth)

export default router;