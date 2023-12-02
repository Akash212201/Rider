import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BsArrowLeftShort} from "react-icons/bs"
import { Link } from 'react-router-dom';
import { getResetPasswordToken } from '../services/operations/authapi';

const ForgotPassword = () => {

    const [emailsent,setemailsent]=useState(false);
    const [email,setemail]=useState("");
   
    const {loading}=useSelector((state)=> state.auth);
const dispatch=useDispatch();
    function submithandler(e){
        e.preventDefault();
        console.log("a");
dispatch(getResetPasswordToken(email,setemailsent));
    }
  return (
    <div className="flex justify-center items-center bg-[#f2f2f2] h-[80vh]">
       <div className="py-8 px-10 w-[25%] mt-[10vh] bg-white shadow-[0, 3px ,101px ,rgba(0,0,0,0.10)] mb-10">
      {
        loading?(<div>Loading....</div>):(
            <div>
            {
                emailsent?<h1 className="text-4xl mt-5 mb-1 text-center">Check Email</h1>:<h1 className="text-4xl mt-5 text-center mb-1">Reset password</h1>

            }
            {
                emailsent?`<p>We have sent the reset email to
                ${email}</p>`
                :<p className="text-base mb-5 text-center">We’ll send you a password reset link 
                </p>
            }
            <form onSubmit={submithandler} className="my-10">
            {
                !emailsent && 
                <label>
                <p className="text-2xl mt-2">Email Address<sup>*</sup></p>
                <input type="text" placeholder='Enter Email' name='email' value={email} onChange={(e)=>setemail(e.target.value) } className="border w-full py-2 px-3 text-lg rounded-xl my-3 outline-none" />
                </label>
            }
            <button type='submit' className="border w-full py-2 px-3 text-lg rounded-xl hover:bg-black hover:text-white">
            {
                emailsent?"Resend Email":"Reset Password"
            }
            
            </button>
            </form>

            <div className="">
            <Link to="/login" className="flex justify-start items-center text-blue-400">
            <BsArrowLeftShort className="mr-2 text-2xl" />
            Back to login
            </Link>

            </div>
            </div>
        )
      }
    </div>
    </div>
  )
}

export default ForgotPassword
