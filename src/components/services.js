import './style/services.css'
const Services = () => {
  return (
    <div className="services flex justify-center items-center">
            <div className="service h-screen lg:w-1/3 md:w-full p-10">
                <div className="service_box">
                    <h3 className="text-6xl">Flexible Services</h3>
                </div>
                <div className="service_box">
                <h2 className="service_content">Smart solutions for all your travel requirements</h2>
                <button className="service_btn">All Services</button>
                </div>
            </div>
            <div className="onDemand h-screen lg:w-1/3 md:w-full p-10">
                <h2 className="text-5xl">On Demand Ride</h2>
                <p className="onDemand_content">Book your Personal Ride on your Demand</p>
            </div>
            <div className="shared h-screen lg:w-1/3 md:w-full p-10">
            <h2 className="text-5xl">Shared Ride</h2>
                <p className="onDemand_content">Book your Shared Ride with convience</p>
            </div>
    </div>
  )
}

export default Services