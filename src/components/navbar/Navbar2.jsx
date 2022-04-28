import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar2 = () => {
  return (
    <>
    <div className="navcontainer">


      {/* <Bars /> */}
      <Nav>
        
        <NavMenu className="bottomnav">
          {/* these are product categories, logic to add later */}
          <NavLink to="/product" activeStyle>essentials</NavLink>
          <NavLink to="/product" activeStyle>designer</NavLink>
          <NavLink to="/product" activeStyle>flaire</NavLink>
          <NavLink to="/product" activeStyle>activewear</NavLink>
          <NavLink to="/product" activeStyle>accessories</NavLink>
        </NavMenu>
      </Nav>
    </div>
    </>
  )
}

export default Navbar2