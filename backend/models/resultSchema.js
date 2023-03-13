import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const resultModel = new Schema({
    email : { type : String },
    question : {type:Array,default:[]},
    result:{type:Array,default:[]},
    attempts:{type:Number,default:0},
    businessfeasibilitysummary : { type : String},
    businessfeasibilitypoints : { type : Number},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('Result', resultModel);