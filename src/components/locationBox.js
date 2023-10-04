import LocationResult from './locationResult'
import './style/locationBox.css'

const LocationBox = () => {
  return (
    <div className="locationbox">
      <div className="location">
        <h1>Choose a ride</h1>
        <div className="lsearch">
          <input type="text" placeholder="Enter a pickup point" />
          <input type="text" placeholder="Enter destination point" />
        </div>
        <button>Pickup Now</button>
        <div className="result">
          <LocationResult />
        </div>
        <div className="result">
          <LocationResult />
        </div>
      </div>
    </div>
  )
}

export default LocationBox