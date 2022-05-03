// from MAINNAV folder
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Search, ShoppingCartOutlined, FavoriteBorder, PersonOutline, Menu, Close } from '@mui/icons-material';
import './navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

//   const hideMenu = () => setToggle(!toggle);

  return (
    <>
    <div className="container">
        {/* slide-in nav */}
        <div id="slidenav" className={toggle ? "active" : ""}>
            <button type="button" className='menu-toggle mobile-toggle' onClick={handleToggle}>
                <Close />
            </button>
            <div className="mobile-brand">
                <a href="/">PHENOMINA.</a>
            </div>
            <div className="slidenav-inner__wrapper">
                <div className="slidenav-inner__menu">
                    <ul>
                        <li><a href="/">home</a></li>
                        <li><a href="/">essentials</a></li>
                        <li><a href="/">designer</a></li>
                        <li><a href="/">flair</a></li>
                        <li><a href="/">activewear</a></li>
                        <li><a href="/">accessories</a></li>
                        <li><a href="/">contact</a></li>
                    </ul>            
                </div>
                <div className="slidenav-inner__commerce">
       
                    <Link className="commerce-menu__item" to="/login"><PersonOutline />
                        <h6>Login / Register</h6>
                    </Link>
                    <Link className="commerce-menu__item" to="/"><FavoriteBorder />
                        <h6>Favourites</h6>
                    </Link>
                    <Link className="commerce-menu__item" to="/cart"><ShoppingCartOutlined />
                        <h6>Cart: $328.00</h6>
                    </Link>
                    {/* <a href="index.html"><PersonOutline />Login / Register</a>
                    <a href="index.html"><FavoriteBorder />Favourites</a>
                    <a href="index.html"><ShoppingCartOutlined />Cart: $328.00</a> */}

                </div>
            </div>
            SIDE SLIDE NAVIGATION!!!!!
        </div>

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
                            <a href="/cart"><ShoppingCartOutlined /></a>
                            <a href="/"><FavoriteBorder /></a>
                            <a href="/login"><PersonOutline /></a>   
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
    </div>
    </>
  )
}

export default Navbar