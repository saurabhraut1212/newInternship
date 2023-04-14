import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/db.js";
import employeeRoutes from "./routes/employeeRoute.js";
import userRoute from "./routes/userRoute.js"

const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());
dbConnection();



app.use('/emp', employeeRoutes);
app.use('/user',userRoute);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server started on port :${PORT}`)
})