import React from 'react'
import { Link } from 'react-router-dom'

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
    {/* <div className="topnav">
      <div className="leftside">
        <div>Language toggle</div>
        <div>searchbar</div>
      </div>
      <div className="middle">
        <div>PHENOMINA.</div>
      </div>
      <div className="rightside">
        <div>register/login</div>
        <div>favourites</div>
        <div>cart</div>
      </div>    
    </div> */}
    <Bars />
    <Nav>
      
      <NavMenu className="bottomnav">
        {/* these are product categories, logic to add later */}
        <NavLink to="/product" activeStyle>essentials</NavLink>
        <NavLink to="/product" activeStyle>designer</NavLink>
        <NavLink to="/product" activeStyle>fancy</NavLink>
        <NavLink to="/product" activeStyle>activewear</NavLink>
        <NavLink to="/product" activeStyle>accessories</NavLink>
      </NavMenu>
    </Nav>

    </>
  )
}

export default Navbar2