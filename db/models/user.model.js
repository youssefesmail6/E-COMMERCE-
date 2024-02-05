import mongoose from "mongoose";
const schema = new mongoose.Schema({
name:{
type: String,
required:true,
trim:true,
},
email:{
    type: String,
    required:true,
    unique:true,
    },
   isVerfied:{
        type:Boolean,
        default:false
    },
    phone:String,
    role:{
        type: String,
        enums:["admin","user"],
        default:"user"
    },
    password:{
        type:String,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    
},{
timestamps :true
});

const usermodel=mongoose.model("user",schema)
export default usermodel;