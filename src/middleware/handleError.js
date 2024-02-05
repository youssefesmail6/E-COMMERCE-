import { AppError } from "../utils/AppError.js"

export const handleError =(fn)=>{
    return (req,res,next)=>{
        fn(req,res).catch(err =>next ( new AppError(err,401)))
    }
}