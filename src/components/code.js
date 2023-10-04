import React, { useEffect, useState } from 'react'

const Code = () => {
    const [pickUp, setpickUp]=useState();
    const [destionation, setdestination]=useState();
    const getCoordinates=async()=>{
        const location="Aligarh"
        const data=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiZHJha29zaSIsImEiOiJja2x1YW9jdWswOHcyMnVvZXQ1aTVqcHBnIn0.G0SLu_zwAEU9_q8FIkHeaQ",
            limit: 1
        }))
        console.log(data.features[0].center)
        setpickUp(data.features[0].center)
    }
    const getDestinationCoordinates=async()=>{
        const destination="Agra"
        const data=await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1IjoiZHJha29zaSIsImEiOiJja2x1YW9jdWswOHcyMnVvZXQ1aTVqcHBnIn0.G0SLu_zwAEU9_q8FIkHeaQ",
            limit: 1
        }))
        console.log(data.features[0].center)
        setdestination(data.features[0].center)
    }
    useEffect(()=>{
        getCoordinates();
        getDestinationCoordinates();
    },[])
  return (
        <>
            <Map pickUp={pickUp} destionation={destionation} />
            <div>Code</div>
        </>
    )
}

export default Code