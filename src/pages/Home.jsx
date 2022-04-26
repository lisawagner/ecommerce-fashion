import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import FeaturedDepts from '../components/FeaturedDepts'
import Products from '../components/Products'
import Magazine from '../components/Magazine'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
      <FeaturedDepts />
      <Products />
      <Magazine />
      <Footer />
      </div>
  )
}

export default Home