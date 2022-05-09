import React, { useState } from 'react'
import SlideNav from './SlideNav'

import {
  MdOutlineHome,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineMenu,
  } from 'react-icons/md'

import { MobileNavWrap, ActionBtn, UserActions, CountStyle } from './mobileNavStyles'

const MobileNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <MobileNavWrap clicked={click}>

        <ActionBtn onClick={handleClick}  >
          <MdOutlineMenu name="menu-outline" />
        </ActionBtn>

        <UserActions>
          <ActionBtn><MdOutlineHome name="home-outline" /></ActionBtn>
          <ActionBtn>
            <MdOutlineFavoriteBorder name="heart-outline" />
            <CountStyle>0</CountStyle>
          </ActionBtn>
          <ActionBtn>
            <MdOutlineShoppingCart name="bag-handle-outline" />
            <CountStyle>0</CountStyle>
          </ActionBtn>
        </UserActions>

      </MobileNavWrap>
      <SlideNav click={click} handleClick={handleClick} />

    </>
  )
}

export default MobileNav