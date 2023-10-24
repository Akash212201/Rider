import React from 'react'
import Ride from '../pages/ride';
import NavBar from './navbar'
import Search from './search';
import vid from '../assests/Hero_video.mp4'

const Hero = () => {
  return (
    <div className="hero">
        <video src={vid} autoPlay loop muted playsInline className="video" >
        </video>
        <div className="m">
        <NavBar />
        </div>
        <Search/>
        <Ride/>
    </div>
  )
}

export default Hero