import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup=async(req,res)=>{
    const {name,email,password,phone}=req.body;
    try {
        const user=await User.findOne({email});
        if(user){
            return res.status(300).json({message:"User with that email is already exists "})
        }

        const hashedPassword=await bcrypt.hash(password,12);
        const newUser=await User.create({
            name,
            email,
            password: hashedPassword,
            phone
        })

        if(!newUser){
            return res.status(204).json({ message: "User not created " })
        }
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json(error)
    }
}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    let token;
    try {
        const user=await User.findOne({email});
        if(!user){
            return res.status(301).json({ message: "User with that email is not exists " })
        }

        const isValidPassword=await bcrypt.compare(password,user.password);

        if (!isValidPassword){
            return res.status(302).json({ message: "Email and password are incorrect" });
        }
        token = jwt.sign({ id:user._id }, process.env.JWT_SECRET, { expiresIn: "1hr" })
       res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json(error)
    }
}

export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err) return res.sendStatus(403);
            next();
        });

    } else {
        res.sendStatus(401);
    }
}