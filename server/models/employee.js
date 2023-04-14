import mongoose from "mongoose";

const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    address:{
        type:String,
        required:true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    primary_contact:{
        type:String,
        required:true
    },
    pri_phone:{
        type:Number,
        required:true
    },
    pri_relationship:{
        type: String,
        required: true
    },
    secondary_contact: {
        type: String,
        required: true
    },
    sec_phone: {
        type: Number,
        required: true
    },
    sec_relationship: {
        type: String,
        required: true
    }
})

export default mongoose.model("Employee", employeeSchema)