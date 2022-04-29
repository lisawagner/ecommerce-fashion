// from MAINNAV folder
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Search, ShoppingCartOutlined, FavoriteBorder, PersonOutline, Menu } from '@mui/icons-material';
import './navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

//   const hideMenu = () => setToggle(!toggle);

  return (
    <>

        {/* slide-in nav */}
        <div id="showme" className={toggle ? "active" : ""}>SIDE SLIDE NAVIGATION!!!!!</div>

        {/* top-nav */}
        <div className="menu-top">
            <div className="container">
                <div className="menu-top__row">

                    <div className="menu-top__col display">
                        <form className="product-search" action="#">
                            <input className="form-control" type="text" placeholder="find your happy" />
                            <button type="submit">
                                <Search />
                                {/* <i class="far fa-search"></i> */}
                            </button>
                        </form>
                    </div>

                    <div className="menu-top__col">
                        <div className="header-brand">
                            <a href="index.html">PHENOMINA.</a>
                        </div>
                    </div>

                    <div className="menu-top__col display">
                        <div className="menu-buttons">
                            <button type="button" className="searchBoxToggler"><Search /></button>
                            <a href="index.html"><ShoppingCartOutlined /></a>
                            <a href="index.html"><FavoriteBorder /></a>
                            <a href="index.html"><PersonOutline /></a>
                            
                            
                        </div>
                    </div>

                    <div className="menu-top__col d-block display-toggle">
                        <button type="button" className='menu-toggle' onClick={handleToggle}>
                            <Menu />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar