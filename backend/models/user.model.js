import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:3
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }


},{timestamps:true})

const User=mongoose.model("User",UserSchema)
export default User;