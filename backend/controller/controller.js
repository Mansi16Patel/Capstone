import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions,{answers} from'../database/data.js';
import NoQuestions from "../models/noquestionSchema.js";
import questionn,{answerss} from'../database/data1.js';

export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
export const getQuestionBySearch = async(req,res)=>{
    //here i means case sensitive
    const category_type = new RegExp(req.query.category_type,'i');
    console.log(category_type);
    
    try{
        const tours = await Questions.find({category_type});

        res.status(200).json({success:true,
            message:"Successfull",
            data:tours,
            });

    }catch(err){
        res.status(404)
        .json({ success:false,message:"not found "});
    }
};

export async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions,answers}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropQuestions(req, res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}
export async function storeResult(req, res){
    try {
        const { email,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints,questions } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        Results.create({ email,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints,questions}, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
            console.log(businessfeasibilitysummary);
        })

   } catch (error) {
        res.json({error})
   }
}
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}
export async function getNoQuestions(req, res){
    try {
        const q = await NoQuestions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
export async function insertNoQuestions(req, res){
    try {
        NoQuestions.insertMany({ questionn,answerss}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropNoQuestions(req, res){
    try {
        await NoQuestions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}