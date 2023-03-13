import React from 'react'
import "./qna.css"
import Questions from './Questions';

const QnA = () => {
    function onPrev(){
        console.log("Prev")
    }
    function onNext(){
        console.log("Next")
    }
    return ( <>
        <div className='container'>
            <h4 className='title1 text-light'> Tell US About</h4>
           
            <Questions/>
            <div className='grid'>
                <button className='btnpre' onClick={onPrev}>Previous</button>
                <button className='btnnext' onClick={onNext}>Next</button>
            </div>
        </div>
    </>
);
};

export default QnA;