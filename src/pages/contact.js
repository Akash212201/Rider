import { useState } from 'react';
import User from '../assests/user.png';
const Contact = () => {
  const [data,setData] = useState({Name: "", Email:"", Mobile: "", Message:""});
  
  const dataHandler=(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(data)
    setData({Name: "", Email:"", Mobile: "", Message:""})
  };
  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-1/2">Map</div>
      <div className="Lsearch p-2 md:p-6 border-[2px] rounded-xl w-1/2">
      <p className="text-[30px] font-bold">Contact Us</p>
      <form action="" onSubmit={submitHandler}>
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src={User} alt="" />
        <input type="text" name="Name" className="bg-transparent w-full outline-none" placeholder="Enter Your Name"  value={data.Name} onChange={dataHandler}/>
      </div>
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src="" alt="" />
        <input type="email" name="Email" className="bg-transparent w-full outline-none" placeholder="Enter Your Email"  value={data.Email} onChange={dataHandler}/>
      </div>
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src="" alt="" />
        <input type="number" name="Mobile" className="bg-transparent w-full outline-none" placeholder="Enter Your Mobile Number"  value={data.Mobile} onChange={dataHandler}/>
      </div>
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4 h-44">
        <textarea name="Message" cols="30" rows="10" className="bg-transparent w-full h-full outline-none resize-none" value={data.Message} onChange={dataHandler}></textarea>
      </div>
      <button className="p-3 w-full bg-black mt-5 text-white hover:bg-slate-950 rounded-lg">Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact