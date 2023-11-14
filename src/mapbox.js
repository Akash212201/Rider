// import React, { useRef, useEffect, useState } from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import "@maptiler/sdk/dist/maptiler-sdk.css";

// const MapBox=() =>{
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const aligarh = { lng: 78.080, lat:27.8964 };
//   const [zoom] = useState(14);
//   maptilersdk.config.apiKey = 'fddX3y90z10zafWuSVz9';

//   useEffect(() => {
//     if (map.current) return; 

//     map.current = new maptilersdk.Map({
//       container: mapContainer.current,
//       style: maptilersdk.MapStyle.STREETS,
//       center: [aligarh.lng, aligarh.lat],
//       zoom: zoom
//     });

//   }, [aligarh.lng, aligarh.lat, zoom]);

//   return (
//     <div className="map-wrap">
//       <div ref={mapContainer} className="map" />
//     </div>
//   );
// }
// export default MapBox