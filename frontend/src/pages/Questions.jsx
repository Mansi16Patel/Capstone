import React from "react";
import "./quiz.css"
import { Link } from "react-router-dom";

const Questions =()=>{
    return (
        <div>
            <form className="radiobtn">
            <h2 className='text-light'> Do You Have a Comprehensive (Internal) Business Plan?</h2>
                <label className="radiobtn1">
                    <Link to={'/Questions1'} className="radiobtn3"><input type='radio'/> Yes </Link>
                </label><br/>
                <label className="radiobtn1">
                    <Link to={'/Questions2'} className="radiobtn3"><input type='radio'/> No </Link>
                </label>
            </form>
        </div>
    )
}
export default Questions;