import React from 'react'
import Hero from '../components/hero'
import Services from '../components/services'
import EasyStep from '../components/easyStep'
import WhyUs from '../components/whyus'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <EasyStep/>
      <WhyUs/>
    </div>
  )
}

export default Home