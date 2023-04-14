import mongoose from "mongoose";

export const dbConnection=async()=>{
    const CONNECTION=process.env.CONNECTION_URI;
    await mongoose.connect(CONNECTION,{useNewUrlParser:true})
               .then(()=>console.log('Connected to the database'))
               .catch((error)=>console.log(error))
}