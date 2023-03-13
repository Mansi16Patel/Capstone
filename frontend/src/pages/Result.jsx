import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/result.css'
import ResultTable from './ResultTable';
import { useDispatch, useSelector } from 'react-redux';
import { resetAllAction } from '../redux/question_reducer';
import { usePublishResult } from '../hooks/setResult';
import { resetResultAction } from '../redux/result_reducer';
import { attempts_Number } from '../helper/helper';
import { earnPoints_Number,flagResult } from '../helper/helper';
const Result = () => {
    const dispatch = useDispatch()
    const {questions:{queue,answers},result:{result,userId}}=useSelector(state=>state)
    
    const totalPoints = queue.length * 1;
    const attempts = attempts_Number(result);
    const earnPoints= earnPoints_Number(result,answers,1);
    const flag= flagResult(totalPoints,earnPoints)

    usePublishResult({
        email:userId,
        result,
        attempts, 
        businessfeasibilitysummary:flag?"Success":"Not Success",
        businessfeasibilitypoints:earnPoints,
        });
    
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    return(
        <div className='container'>
            <div className='container1'>
            <h2 className='title1 text-light'>Your Bussines Plan Summary</h2>
            </div>
            <div className='result flex-center'>
                <div className='flex'>
                    <span className='text'>Email : </span>
                    <span className='text'>{userId || ""}</span>
                </div>
                <div className='flex'>
                    <span className='text'>Business feasibility Points : </span>
                    <span className='text'>{earnPoints || 0}</span>
                </div>
                <div className='flex'>
                    <span className='text'>Business feasibility Summary : </span>
                    <span style={{color:`${flag ? "white":"red"}`}}className='text'>{flag ? "Success":"Not Success"}</span>
                </div>
            </div>
           <div className='start'>  
            <Link className='btn1' to={'/'} onClick={onRestart}>Restart</Link>
           </div>
           <div className='container'>
            <ResultTable></ResultTable>
           </div>
        </div>
    )
}

export default Result;