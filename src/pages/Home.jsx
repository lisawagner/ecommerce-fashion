import React from 'react'
import FeaturedDepts from '../components/FeaturedDepts'
import Magazine from '../components/Magazine'
import Products from '../components/Products'
import Hero from '../components/Hero/Hero'
import FeatureCards from '../components/FeatureCards/FeatureCards'


const Home = () => {
  return (
    <>
      <Hero />
      {/* <FeaturedDepts /> */}
      <FeatureCards />
      <Products />
      <Magazine />
    </>
  )
}

export default Home