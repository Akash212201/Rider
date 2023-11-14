import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken="pk.eyJ1IjoiZHJha29zaSIsImEiOiJja2x1YW9jdWswOHcyMnVvZXQ1aTVqcHBnIn0.G0SLu_zwAEU9_q8FIkHeaQ"
//mapboxgl.accessToken="pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
const Map = (props) => {
    useEffect(()=>{
        const map= new mapboxgl.Map({
            container: "mymap",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-99.2901,39.39172],
            zoom: 3,
        })
        console.log(map)
    })
    const addToMap=(map)=>{
        const marker1=new mapboxgl.Marker()
        .setLngLat([props.pickUp,props.destionation])
        .addTo(map)
    }
  return (
    <div id="mymap"></div>
  )
}

export default Map