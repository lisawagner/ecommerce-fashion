import React from 'react'

import Banner from '../Banner/Banner'
import NavbarOld from '../NavbarOld'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Footer2 from '../Footer2/Footer2'

const Layout = ({children}) => {
  return (
    <>
        <Banner />
        <Header />
        {/* <NavbarOld /> */}
        {children}
        <Footer />
        <Footer2 />
    </>
  )
}

export default Layout