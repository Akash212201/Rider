import LocationResult from './locationResult'
import './style/locationBox.css'
import MapBox from '../mapbox'
//Extra Component(not useful)
const LocationBox = () => {
  return (
    <div className="locationbox">
      <div className="locationdiv">
      <div className="location">
        <h1>Choose a ride</h1>
        <div className="lsearch">
          <input type="text" placeholder="Enter a pickup point" />
          <input type="text" placeholder="Enter destination point" />
        </div>
        <button className="service_btn">Pickup Now</button>
        <div className="result">
          <LocationResult />
        </div>
        <div className="result">
          <LocationResult />
        </div>
      </div>
      </div>
      <div className="mapdiv">
        <MapBox />
      </div>
    </div>
  )
}

export default LocationBox