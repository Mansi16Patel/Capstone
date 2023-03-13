import React, { useRef, useState } from 'react';
import './Form1.css'
import {Col, Form} from 'reactstrap';
import validator from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

const Form1 = () => {

    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email')
        } else if(validator.isLength(email , {min:0, max: 0})){
          setEmailError('Email is required')
        }
        else {
            setEmailError('Enter valid Email!')
          }

       /*  if(validator.isLength(email)){
            setEmailError('Valid Email :)')
        }
        else {
            setEmailError('Enter valid Email!')
          } */
      }
    const inputRef = useRef(null);
    const dispatch=useDispatch()
    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
    return <Col lg='12'>
        <div className='form-bar'>
            <Form className='d-flex align-items-center gap-4'>
                <div>
                    <h4  className='form'>Want to know your Bussiness Opportunities?</h4>
                    <div>
                    <label className='form'> Enter Your Email ID: </label><input ref={inputRef} type="text" className='input' placeholder='Email ID' onChange={(e) => validateEmail(e)}/>
                    <span className='error'> * {emailError} </span>
                    </div>
                    <br/>
                    <Link to={'quiz'} className='form1' onClick={startQuiz}>Click Here To Get Started</Link>
                    
                </div>
            </Form>
        </div>
    </Col>
};

export default Form1;