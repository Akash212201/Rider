import './services.css'
const Services = () => {
  return (
    <div className="services">
            <div className="service">
                <div className="service_box">
                    <h3 className="service_title">Flexible Services</h3>
                </div>
                <div className="service_box">
                <h2 className="service_content">Smart solutions for all your travel requirements</h2>
                <button className="service_btn">All Services</button>
                </div>
            </div>
            <div className="onDemand">
                <h2 className="onDemand_title">On Demand Ride</h2>
                <p className="onDemand_content">Book your Personal Ride on your Demand</p>
            </div>
            <div className="shared">
            <h2 className="onDemand_title">Shared Ride</h2>
                <p className="onDemand_content">Book your Shared Ride with convience</p>
            </div>
    </div>
  )
}

export default Services