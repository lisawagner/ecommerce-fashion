import React from 'react'
import Slider from '../components/Slider/Slider'
import FeaturedDepts from '../components/FeaturedDepts'
import Magazine from '../components/Magazine'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
      <Slider />
      <FeaturedDepts />
      <Products />
      <Magazine />
    </>
  )
}

export default Home