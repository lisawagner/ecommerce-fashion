import React from 'react'

import Banner from '../Banner/Banner'
import NavbarOld from '../NavbarOld'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <>
        <Banner />
        <Header />
        {/* <NavbarOld /> */}
        {children}
        <Footer />
    </>
  )
}

export default Layout