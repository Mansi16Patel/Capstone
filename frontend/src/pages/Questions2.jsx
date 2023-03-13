import React, { useEffect, useState } from 'react'
import "./quiz.css";

import { useFetchQuestion } from '../hooks/FetchNoQuestion';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchNoQuestion';
import {PushAnswer} from '../hooks/setResult';
import {useSelector,useDispatch} from 'react-redux';

const Questions2 = ({onChecked}) => {

    const[check, setChecked] = useState(undefined)
    const [{ isLoading,apiData,serverError}] = useFetchQuestion();
    

    const questionn = useSelector(state=>state.questions.queue[state.questionn.trace])

    const state = useSelector(state=>state)
    const {queue,trace} = useSelector(state=>state.questions)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(state)
    })
    function onPrev(){
        //console.log("On Previous Click")
        if(trace>0){
            dispatch(MovePrevQuestion())
        }
        
    }
    function onNext(){
        //console.log("On nect Click")
        if(trace<queue.length){
            dispatch(MoveNextQuestion())
            dispatch(PushAnswer(check))
        }
    
    }

    function onChecked(check){
        console.log(check);
        setChecked(check)
    }

    useEffect(()=>{
        //console.log(questions)
    })

    useEffect(()=>{
        //console.log(isLoading)
        console.log(apiData)
        // console.log(serverError)
    })
    function onSelect(i){
         onChecked(i)
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown error"}</h3>
    return(
        <div className='container'>
            <div className='container1'>
            <h2 className='title1 text-light'> Tell US About Your Bussines Plan</h2>
            </div>
            <div className='questions'>
            <h2 className='text-light'>{ questionn?.questionn }</h2>

            <ul key={questionn?.id}>
                {
                    questionn?.options.map((q,i)=>(
                        <li key={i}>
                        <input 
                            type="radio"
                            value={false}
                            name= "options"
                            id={`q${i}-option`}
                            onChange={()=>onSelect(i)}
                        />
                        <label className='text' htmlFor={`q${i}-option`}>{q}</label>
                        
                        </li>
                    ))
                }
            </ul>
            <div className='grid'>
                <button className='btnpre' onClick={onPrev}>Previous</button>
                <button className='btnnext' onClick={onNext}>Next</button>
            </div>
        </div>
           </div> 
        
    )
}

export default Questions2   ;