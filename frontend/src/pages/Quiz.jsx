import React, { useEffect, useState } from 'react'
import "./quiz.css"
import Questions from './Questions';
import {useSelector,useDispatch} from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import {PushAnswer} from '../hooks/setResult';
//import { pureFinalPropsSelectorFactory } from 'react-redux/es/connect/selectorFactory';


const Quiz = () => {

    const [check, setChecked]=useState(undefined);
    const state = useSelector(state=>state)
    const {queue,trace} = useSelector(state=>state.questions)
    const dispatch = useDispatch()
    
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
    
    return ( <>
        <div className='container'>
            <div className='container1'>
            <h2 className='title1 text-light'> Tell US About Your Bussines Plan</h2>
            </div>
            <Questions onChecked={onChecked}/>
            
        </div>
    </>
);
};

export default Quiz;