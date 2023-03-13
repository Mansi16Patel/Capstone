import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";

import { getServerData } from "../helper/helper";
import * as Action from "../redux/question_reducer"


export const useFetchQuestion=()=>{
    const dispatch = useDispatch();
    const [getData,setGetData]= useState({ isLoading: false,apiData:[],serverError:null})
    useEffect(()=>{
        setGetData(prev=>({...prev,isLoading:true}));
        (async ()=>{
            try {
                const [{questionn,answerss}]=await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/noquestions`,(data)=>data)
                console.log({questionn,answerss});
                if(questionn.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:questionn}));
                    dispatch(Action.startExamAction({question:questionn,answerss}))
                }else{
                    throw new Error("No Questions Available");
                }
            } catch (error) {
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:error}));
            }
        })();
    },[dispatch]);

    return [getData,setGetData];
}

export const MoveNextQuestion =()=>async(dispatch)=>{
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion =()=>async(dispatch)=>{
    try {
        dispatch(Action.movePrevAction());
    } catch (error) {
        console.log(error)
    }
}