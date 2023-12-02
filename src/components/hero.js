import Uber from '../assests/uber.png';
import Circle from '../assests/circle.png';
const Hero=()=>{
    return (
        <div className="H lg:px-24 px-10 flex flex-col justify-center items-center">
        <div>
            <h3 className="lg:text-9xl text-6xl text-center text-white font-bold">Intercity ride at your own pace</h3>
        </div>
      <div className="Lsearch p-2 md:p-6 border-[2px] rounded-xl HH lg:flex gap-3 w-full">
      <div className="bg-[#e2e8f0] p-3 rounded-lg mt-3 flex justify-center item-center gap-4 lg:w-[30%]">
        <img src={Circle} alt="" />
        <input type="text" className="bg-transparent w-full outline-none" placeholder="From" />
      </div>
      <div className="bg-[#e2e8f0] p-3 rounded-lg mt-3 flex item-center gap-4 lg:w-[30%]">
        <img src={Uber} alt="" />
        <input type="text" className="bg-transparent w-full outline-none" placeholder="To" />
      </div>
      <div className="bg-[#e2e8f0] p-3 rounded-lg mt-3 flex item-center gap-4 lg:w-[30%]">
        <img src={Uber} alt="" />
        <input type="date" className="bg-transparent w-full outline-none" placeholder="To" />
      </div>
      <button className="p-3 bg-black mt-5 text-white hover:bg-slate-950 rounded-lg w-[20%]">Search</button>
    </div>
    </div>
    );
}
export default Hero