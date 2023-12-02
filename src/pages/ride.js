import React from 'react'
import Search from '../components/search';
import MapIndia from '../components/MapIndia';

const Ride = () => {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 relative top-12 mb-24" >
          <div>
            <Search />
          </div>
          <div className="col-span-2 border h-[200vh] w-[65vw]">
      <MapIndia />
          </div>
        </div>
    );
}

export default Ride