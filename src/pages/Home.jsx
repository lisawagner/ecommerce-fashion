import React from 'react'
// import Slider from '../components/Slider/Slider'
import FeaturedDepts from '../components/FeaturedDepts'
import Magazine from '../components/Magazine'
import Products from '../components/Products'
import Hero from '../components/Hero/Hero'
// import Herio from '../components/Hero/Herio'

const Home = () => {
  return (
    <>
    {/* <Herio /> */}
      <Hero />
      {/* <Slider /> */}
      <FeaturedDepts />
      <Products />
      <Magazine />
    </>
  )
}

export default Home