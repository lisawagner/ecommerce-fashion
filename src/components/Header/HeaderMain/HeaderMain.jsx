import React from 'react'
import {
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  } from 'react-icons/md'

import { HeaderMainWrapper, BrandLink, MainContainer, SearchBar, SearchInput, SearchBtn, UserActionsWrap, ActionBtn, Count } from './headerMainStyles'

const HeaderMain = () => {
  return (
    <>
      <HeaderMainWrapper>
        <MainContainer>

          <BrandLink to="/">Phenomena</BrandLink>

          <SearchBar>
            <SearchInput />
            <SearchBtn>
              <MdSearch />
            </SearchBtn>
          </SearchBar>

          <UserActionsWrap>
            <ActionBtn>
              <MdPersonOutline />
            </ActionBtn>
            <ActionBtn>
              <MdOutlineFavoriteBorder />
              <Count>0</Count>
            </ActionBtn>
            <ActionBtn>
              <MdOutlineShoppingCart />
              <Count>0</Count>
            </ActionBtn>
          </UserActionsWrap>

        </MainContainer>
      </HeaderMainWrapper>
    </>
    

  )
}

export default HeaderMain