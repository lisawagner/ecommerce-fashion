import React from 'react'
// import Carousel from '../components/Carousel/Carousel'
// import Slider from '../components/Slider/Slider'
import FeaturedDepts from '../components/FeaturedDepts'
import Magazine from '../components/Magazine'
import Products from '../components/Products'
// import Hero from '../components/Hero/Hero'
// import Herio from '../components/Hero/Herio'
import Slider from '../components/TempSlider/Slider'

const Home = () => {
  return (
    <>
    {/* <Herio /> */}
      {/* <Hero /> */}
      {/* <Slider /> */}
      {/* <Carousel /> */}
      <Slider />
      <FeaturedDepts />
      <Products />
      <Magazine />
    </>
  )
}

export default Home