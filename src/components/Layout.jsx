import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Navbar2 from './navbar/Navbar2'

import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Banner />
        <Navbar />
        <Navbar2 />
        {children}
        <Footer />
    </>
  )
}

export default Layout