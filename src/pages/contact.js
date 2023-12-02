import { useState } from 'react';
import User from '../assests/user.png';
import { FaPhoneAlt } from "react-icons/fa";
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
  const contactItems=[
    {
      img: "",
      title: "Address",
      desc: "Sultanpur Uttar Pradesh"
    },
    {
      img: <FaPhoneAlt/>,
      title: "Phone",
      desc: "+91 9149215780"
    },
    {
      img: "",
      title: "Email",
      desc: "help@rickshaw.com"
    },
  ];
  return (
    <div className="flex justify-center items-center p-6 relative top-20 mb-20 bg-[#f2f2f2] flex-col lg:flex-row">
      <div className="md:w-1/2 lg:w-full">
        <div className="text-center py-4 lg:px-10">
          <h1 className="text-4xl">Have a Question?</h1>
          <p className="text-xl">Toh puch naa yrr! Send your queries, comments, suggestions and feedback</p>
        </div>
        <div className='pl-5'>
          {
            contactItems.map((item,idx)=>(
              <div key={idx} className="py-10">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="Lsearch p-2 md:p-6 border-[2px] rounded-xl lg:w-1/2 bg-white w-full">
      <p className="text-[30px] font-bold">Contact Us</p>
      <form action="" onSubmit={submitHandler}>
      <div className="bg-[#e2e8f0] p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src={User} alt="" />
        <input type="text" name="Name" className="bg-transparent w-full outline-none" placeholder="Enter Your Name"  value={data.Name} onChange={dataHandler}/>
      </div>
      <div className="bg-[#e2e8f0] p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src="" alt="" />
        <input type="email" name="Email" className="bg-transparent w-full outline-none" placeholder="Enter Your Email"  value={data.Email} onChange={dataHandler}/>
      </div>
      <div className="bg-[#e2e8f0] p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src="" alt="" />
        <input type="number" name="Mobile" className="bg-transparent w-full outline-none" placeholder="Enter Your Mobile Number"  value={data.Mobile} onChange={dataHandler}/>
      </div>
      <div className="bg-[#e2e8f0] p-3 rounded-lg mt-3 flex item-center gap-4 h-44">
        <textarea name="Message" cols="30" rows="10" className="bg-transparent w-full h-full outline-none resize-none" value={data.Message} onChange={dataHandler}></textarea>
      </div>
      <button className="p-3 w-full bg-black mt-5 text-white hover:bg-slate-950 rounded-lg">Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact