import User from "../models/User.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// USER REGISTER ROUTE

const cookieOptions = {
  httpOnly: true,
  secure: process.env.APP_ENV === "production",
  sameSite: process.env.APP_ENV === "production" ? "none" : "strict",
};

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //Checking if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    //Validate password and check if password is strong
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }
    //Hash user password

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token, {
      ...cookieOptions,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({ success: true, user: email, name: user.name });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
