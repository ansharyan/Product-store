import mongoose from "mongoose";

export const isValidId = async (req, res, next) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false, message: " Invalid Id"});
    }
    next();
}