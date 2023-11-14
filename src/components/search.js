import { useState } from 'react';
import Uber from '../assests/uber.png';
import LocationResult from './locationResult';
const Search = () => {
  const [dis,setDis]=useState(false);
  return (
    <div>
      <div className="Lsearch p-2 md:p-6 border-[2px] rounded-xl">
      <p className="text-[30px] font-bold">Choose a Ride</p>
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src={Uber} alt="" />
        <input type="text" className="bg-transparent w-full outline-none" placeholder="Enter Pickup Location" />
      </div>
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex item-center gap-4">
        <img src={Uber} alt="" />
        <input type="text" className="bg-transparent w-full outline-none" placeholder="Enter Destination Location" />
      </div>
      <button className=" p-3 w-full bg-black mt-5 text-white hover:bg-slate-950 rounded-lg" onClick={()=>(setDis(!dis))}>Search</button>
    </div>
    {dis?<LocationResult/>:null}
    </div>
  )
}

export default Search