import { combineReducers, configureStore } from '@reduxjs/toolkit';
import noquestionreducer from './noquestion_reducer';
import  questionReducer  from './question_reducer';
import  resultReducer  from './result_reducer';

const rootReducer = combineReducers({
    questions : questionReducer,
    questionn : noquestionreducer,
    result : resultReducer
})
export default configureStore({ reducer : rootReducer});