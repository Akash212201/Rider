import React from 'react'
import Template from "../components/Common/Template"
import { useSelector } from 'react-redux'

const Signup = () => {
  const {loading}=useSelector((state)=>state.auth);
  console.log("signupa");
  return (
    <div className="bg-[#f2f2f2] pb-10 px-5">
   {
    loading?(<div>Loading...</div>):(
      <Template
      heading="Join the millions learning to code with StudyNotion for free"
      para1="Build skills for today, tomorrow, and beyond. Education to future-proof your career."
      formtype="signup"
      ></Template>
    )
   }
      
    </div>
  )
}

export default Signup
