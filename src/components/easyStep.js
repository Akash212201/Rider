import './style/easyStep.css'
import tempImg from '../assests/temp.png'
const EasyStep = () => {
    const steps=[
        {
          number: "01",
          title: "Plan Your Destination",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima porro quis necessitatibus, cumque vitae distinctio.",
        },
        {
          number: "02",
          title: "Reserve your booking",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, perferendis porro ullam doloremque reiciendis distinctio?",
        },
        {
          number: "03",
          title: "Hit the Road",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta ab itaque nobis perferendis. Quas.",
        },
    ];
  return (
    <div className='easy'>
        <h3 className="easy_title text-center text-4xl">Book Your Ride in 3 Easy Steps</h3>
        <div className="easy_content_mbox flex">
            <div className="easy_content_box lg:w-1/2 md:w-full">
                
                {steps.map((step, index) => (
                <div key={index} className="easy_content">
                  <span className="text-[#808080] text-[20px]">{step.number}</span>
                  <h2 className="text-4xl my-[5px]">{step.title}</h2>
                  <p>{step.desc}</p>
                </div>
                ))}
              <button className="easy_btn">Book Now</button>
            </div>
            <div className="imgbox flex lg:w-1/2 md:w-full">
                <img src={tempImg} alt="" />
            </div>
        </div>
    </div>
  )
}
//"https://parkingenmalaga.com/wp-content/uploads/2021/12/City-driver-pana.png" 
export default EasyStep