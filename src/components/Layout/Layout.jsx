import React from 'react'

import Banner from '../Banner/Banner'
import NavbarOld from '../NavbarOld'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Banner />
        <NavbarOld />
        {children}
        <Footer />
    </>
  )
}

export default Layout