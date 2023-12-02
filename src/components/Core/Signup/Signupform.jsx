import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { setsignupdata } from "../../../Slices/authslice";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendotp } from "../../../services/operations/authapi"

const Signupform = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    password: "",
    confirmpassword: "",
    email: ""
  });
  const { firstname, lastname, phone, password, confirmpassword, email } = formdata;
  const [isvisible, setisvisible] = useState(false);
  const [isvisible1, setisvisible1] = useState(false);
  const [accounttype, setaccounttype] = useState("Student");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(accounttype);

  const changehandler=(event)=>{
    const { name, value } = event.target;

    setformdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }


  const submithandler=(e) =>{
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error("Password not matching");
      return;
    }
    const signupdata = { ...formdata, accounttype };
    console.log("signup val", signupdata);

    // call the setsignup reducer from auth slice
    dispatch(setsignupdata(signupdata));
    // send otp using dispatch hook
    dispatch(sendotp(formdata.email, navigate));

    // reset the form 
    setformdata({
      firstname: "", lastname: "", phone: "", password: "", confirmpassword: "", email: ""
    })
    setaccounttype("Student");

  }
  function toggle() {
    if (isvisible) {
      setisvisible(false);
    } else {
      setisvisible(true);
    }
  }

  function toggle1() {
    if (isvisible1) {
      setisvisible1(false);
    } else {
      setisvisible1(true);
    }
  }
  return (
    <div className="flex flex-col gap-6 mt-6">
      {/**button */}
      <form onSubmit={submithandler}>
        <div className="flex flex-row items-center gap-3 w-full mb-3">
          <div className="w-[50%]">
          <label>
            <p className="text-richblack-900 ">
              First Name <sup>*</sup>
            </p>
            <input
              placeholder="Enter First Name"
              className=" rounded-lg bg-[#e2e8f0] text-black px-[20px] py-[12px] w-full outline-none"
              name="firstname"
              onChange={changehandler}
              value={firstname}
            />
          </label>
          </div>
          <div className="w-[50%]">
          <label>
            <p className="text-richblack-900 ">
              Last Name <sup>*</sup>
            </p>
            <input
              className=" rounded-lg bg-[#e2e8f0] text-black px-[20px] py-[12px] w-full outline-none"
              placeholder="Enter Last Name"
              name="lastname"
              onChange={changehandler}
              value={lastname}
            />
          </label>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 w-full mb-3">
          <div className="w-[50%]">
          <label>
          <p className='text-richblack-900 '>Email <sup>*</sup></p>
          <input type="email" placeholder='Enter Email' name='email' onChange={changehandler} className=" rounded-lg bg-[#e2e8f0] text-black px-[20px] py-[12px] w-full outline-none" value={email}></input>

        </label>
          </div>
          <div className="w-[50%]">
          <label>
          <p className='text-richblack-900 '>Phone No <sup>*</sup></p>
          <input type="number" placeholder='Enter Phone no' name='phone' onChange={changehandler} className=" rounded-lg bg-[#e2e8f0] text-black px-[20px] py-[12px] w-full outline-none" value={phone}></input>

        </label>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 w-full mb-3">
          <div className="w-[50%]">
          <label>
            <p className="text-richblack-900 ">
              Create Password <sup>*</sup>
            </p>
            <div className="relative">
              <input
                className=" rounded-lg bg-[#e2e8f0] text-black px-[20px] py-[12px] w-full outline-none"
                placeholder="Create Password"
                type={`${isvisible ? "text" : "password"}`}
                name="password"

                onChange={changehandler}
                value={password}
              />
              <div
                className="text-black absolute translate-x-[196px] -translate-y-[30px]"
                onClick={() => toggle()}
              >
                {isvisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
          </label>
          </div>
          <div className="w-[50%]">
          <label>
            <p className="text-richblack-900 ">
              Confirm Password <sup>*</sup>
            </p>
            <div className="relative">
              <input
                className=" rounded-lg bg-[#e2e8f0] text-black px-[20px] py-[12px] w-full outline-none"
                placeholder="Enter confirm password"
                type={`${isvisible1 ? "text" : "password"}`}
                name="confirmpassword"

                onChange={changehandler}
                value={confirmpassword}
              />
              <div
                className="text-black absolute translate-x-[220px] -translate-y-[30px]"
                onClick={() => toggle1()}
              >
                {isvisible1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>
          </label>
          </div>
        </div>
        <div className="w-fit items-center">

          <button
            type="submit"
            className="mt-6 rounded-[8px] bg-black py-[8px] px-[12px] font-medium text-white"
          >
            Create Account
          </button>
        </div>

      </form>
    </div>
  );
};
export default Signupform;
