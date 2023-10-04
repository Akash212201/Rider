import React, { useEffect } from 'react'
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken="pk.eyJ1IjoiZHJha29zaSIsImEiOiJja2x1YW9jdWswOHcyMnVvZXQ1aTVqcHBnIn0.G0SLu_zwAEU9_q8FIkHeaQ"
const Map = (props) => {
    useEffect(()=>{
        const map= new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
            center: [-99.2901,39.39172],
            zoom: 3,
        })
        addToMap(map)
    })
    const addToMap=(map)=>{
        const marker1=new mapboxgl.Marker()
        .setLngLat([props.pickUp,props.destionation])
        .addTo(map)
    }
  return (
    <div>Map</div>
  )
}

export default Map