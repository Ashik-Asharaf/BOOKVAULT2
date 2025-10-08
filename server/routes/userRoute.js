import express from "express";
import { userRegister } from "../controllers/useController.js"; // <-- fixed filename

const router = express.Router();

//Sample user route
router.post("/register", userRegister);

export default router;