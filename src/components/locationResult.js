import { useState } from 'react';
import Ride_1 from '../assests/ride_1.png'
const LocationResult = () => {
  const Data=[
    {
      id: 1,
      name: 'Shared Rides',
      desc: 'Easy available, Affordable shared rides',
      amount: 1.1,
      image: Ride_1
    },
    {
      id: 2,
      name: 'Personal ride',
      desc: 'Comfortable Personal ride at your doorstep',
      amount: 2,
      image: Ride_1
    },
  ]
  const [activeIdx, setActiveIdx] = useState();

  return (
    <div className="border-[2px] rounded-xl py-2">
      {
      Data.map((item,idx)=>(
        <div className={`mt-5 p-4 flex justify-between items-center cursor-pointer rounded-md mb-1 border-black ${activeIdx===idx?'border-[2px]':''}`} onClick={()=>setActiveIdx(idx)}>
       <div className="r_img w-[70px] h-[50px]">
        <img src={item.image} alt="" />
      </div>
      <div className="r_content w-[65%] my-1">
        <h2 className='font-semibold text-[20px]'>{item.name}</h2>
        <p>{item.desc}</p>
      </div>
      <div className="r_price">₹{item.amount}</div> 
      </div>
      ))
    }
    </div>    
  )
}

export default LocationResult