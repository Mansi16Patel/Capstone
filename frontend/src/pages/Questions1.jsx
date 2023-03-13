import React, { useEffect, useState } from 'react'
import "./quiz.css";
import { Navigate } from 'react-router-dom';

import { useFetchQuestion } from '../hooks/FetchQuestion';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import {PushAnswer, updateResult} from '../hooks/setResult';
import {useSelector,useDispatch} from 'react-redux';
const Questions1 = ({onChecked}) => {

    const[check,  setChecked] = useState(undefined)
    
    const [{ isLoading,apiData,serverError}] = useFetchQuestion();
   // useSelector(state=>console.log(state));

    const questions = useSelector(state=>state.questions.queue[state.questions.trace])
    
    const result = useSelector(state=>state.result.result)
    const {queue,trace} = useSelector(state=>state.questions)

    const dispatch = useDispatch()
    useEffect(()=>{
        
      
       console.log(result)
        dispatch(updateResult({trace,check})) 
    },[check])

    function onPrev(){
        console.log("On Previous Click")
        if(trace>0){
            dispatch(MovePrevQuestion())
        }
        
    }
    function onNext(){
        console.log("On next Click")
        if(trace<queue.length){
            dispatch(MoveNextQuestion())

            if(result.length<=trace){
                dispatch(PushAnswer(check))
            }
        }
    //setChecked(undefined)
    }
    
    function onChecked(check){
       // console.log(check);
        setChecked(check)
    }

    if(result.length && result.length>=queue.length){
        return <Navigate to={'/result'} replace="true"></Navigate>
    }
    

    
    function onSelect(i){
         onChecked(i)
         setChecked(i);
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown error"}</h3>
    return(
        <div className='container'>
            <div className='container1'>
            <h2 className='title1 text-light'> Tell US About Your Bussines Plan</h2>
            </div>
            <div className='questions'>
            <h2 className='text-light'>{ questions?.question }</h2>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q,i)=>(
                        <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name= "options"
                            id={`q${i}-option`}
                            onChange={()=>onSelect(`${q}`)}
                        />
                        <label className='text' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace == i ? 'check' : '']}`}></div>
                        </li>
                    ))
                }
            </ul>
            <div className='grid'>
               {trace > 0 ? <button className='btnpre' onClick={onPrev}>Previous</button>:<div></div> }
                <button className='btnnext' onClick={onNext}>Next</button>
            </div>
        </div>
           </div> 
        
    )
}

export default Questions1;