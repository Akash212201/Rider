import React from "react";
import frame from "../../assests/Images/frame.png"
import Loginform from "../Core/Login/Loginform"
import Signupform from "../Core/Signup/Signupform"
import { useSelector } from "react-redux";


const Template = ({ heading, para1, formtype }) => {
  const {loading}=useSelector((state)=> state.auth);
  console.log("signupb");
  return (
    <div className="">
    {
      loading?(<div>Loading...</div>):(
    <div className="flex lg:flex-row lg:gap-4 flex-col gap-0">
    {/**left part */}
    <div className="mt-24 lg:w-[50%] flex flex-col items-center">
    <img src={frame}  className="h-[520px]" alt="error"></img>
    </div>
    {/**right part */}
    <div className="lg:w-[50%] flex flex-col items-start gap-5 text-[1rem] mt-24">
      {/**form type */}
      <div className="formtemplate px-10 py-16">
        <h1>{heading}</h1>
        <p>{para1}</p>
      {
        formtype==="signup"?<Signupform/>:<Loginform/>

      }
      </div>
    </div>
  </div>
      )
    }
    </div>
  );
};

export default Template;