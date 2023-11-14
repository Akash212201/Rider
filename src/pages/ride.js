import React from 'react'
import Search from '../components/search';

const Ride = () => {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <Search />
          </div>
          <div className="col-span-2 border">
            Google Map
          </div>
        </div>
    );
}

export default Ride