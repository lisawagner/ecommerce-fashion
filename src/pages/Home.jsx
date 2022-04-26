import React from 'react'
import Slider from '../components/Slider'
import FeaturedDepts from '../components/FeaturedDepts'
import Magazine from '../components/Magazine'
import Products from '../components/Products'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <Slider />
      <FeaturedDepts />
      <Products />
      <Magazine />
    </Layout>
  )
}

export default Home