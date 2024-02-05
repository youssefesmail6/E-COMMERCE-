import mongoose from "mongoose";
const schema = new mongoose.Schema({
title:{
type: String,
required:true,
minLength:[3,"title is too short"],
trim:true,
unique: true
},
slug:{
type:String,
required:true,
lowercase:true
},

createdby:{
    type:mongoose.Types.ObjectId,
    ref:"user"
}

},{
timestamps :true
});

const brandmodel=mongoose.model("brand",schema)
export default brandmodel;