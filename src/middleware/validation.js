import { AppError } from "../utils/AppError.js";


export const validation =(schema)=>{
    return (req,res,next)=>{
        let filters = {};
   if(req.file || req.files){
filters = {image :req.file? req.file :req.files,...req.body, ...req.params, ...req.query}
   }
   else
   {
    filters ={...req.body, ...req.params, ...req.query}
   }
        let {error} =  schema.validate( filters ,{aboartEarly:false}) 
   
if(!error){
    next()
}
else{
    let errorList =[];
    error.details.forEach(ele =>{
        errorList.push(ele.message)
    });
    next (new AppError(errorList,401))
}
}
}