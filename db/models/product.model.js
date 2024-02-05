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
},description:{
    type:String,
    minLength:[3,"title is too short"],
    minLength:[300,"title is too long"],
    required:true,
   
    },
    price:{
type:Number,
min:0,
required:true
    }, priceAfterDiscount:{
        type:Number,
        min:0,
        required:true
            },

category:{
    type:mongoose.Types.ObjectId,
    ref:"category"
},
imageCover:String,
images:[String],
sold:{
    type:Number,
     required:true,
     default:0
},
quantity:{
    type:Number,
    required:true,
    default:0
},
rateCount:Number,
rateAverage:{
    type:Number,
   min:0,
   max:5
},
subCategory:{
    type:mongoose.Types.ObjectId,
    ref:"subCategory"
},
brand:{
    type:mongoose.Types.ObjectId,
    ref:"brand"
},


},{
timestamps :true
});

const productmodel=mongoose.model("product",schema)
export default productmodel;