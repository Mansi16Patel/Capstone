import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const noquestionModel = new Schema({
  
    questionn: { type : Array, default: []},
    answerss: {type:Array,default:[]},
   
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('NoQuestion', noquestionModel);