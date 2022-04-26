import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Banner />
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default Layout