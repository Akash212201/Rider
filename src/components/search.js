import './style/search.css'
const Search = () => {
  return (
    <div className="container">
        <div className="back">back</div>
        <div className="inputsearch">
            <div className="inputIcon">
                <img src="./assests/search.png" alt="" />
                <img src="/assests/search.png" alt="" />
                <img src="/assests/search.png" alt="" />
            </div>
            <div className="inputbox">
                <input type="text" placeholder="Enter Pickup location"/>
                <input type="text" placeholder="Where to?"/>
            </div>
        </div>
        <div className="confirm"><button className="btn">Confirm</button></div>
    </div>
  )
}

export default Search