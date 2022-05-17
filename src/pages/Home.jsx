import React from 'react'
import FeaturedDepts from '../components/FeaturedDepts'
import Magazine from '../components/Magazine'
import Products from '../components/Products/Products'
import Hero from '../components/Hero/Hero'
import FeatureCards from '../components/FeatureCards/FeatureCards'
import Cards from '../components/Cards/Cards'


const Home = () => {
  return (
    <>
      <Hero />
      {/* <FeaturedDepts /> */}
      {/* <FeatureCards /> */}
      <Cards />
      <Products />
      <Magazine />
    </>
  )
}

export default Home