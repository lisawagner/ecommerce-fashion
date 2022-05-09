import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

// responsive queries not working with this version of react, maybe dated
import { mobile } from '../responsive'

import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
  /* height: 60px; */
  
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({background: "red" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`
const Centre = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-align: none;
`

const NavbarOld = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
              <Language>EN</Language>
              <SearchContainer>
                <Input placeholder="Search" />
                <Search style={{color: 'grey', fontSize: 16 }} />
              </SearchContainer>
            </Left>
            <Centre>
            <Link to="/">
              <Logo>PHENOMINA.</Logo>
              </Link>
            </Centre>
            <Right>
              <Link to="register">
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="login">
                <MenuItem>LOGIN</MenuItem>
              </Link>
              <Link to="cart">
                <MenuItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon color="action" />
                  </Badge>
                </MenuItem>
              </Link>  
            </Right>
        </Wrapper>
    </Container>
  )
}

export default NavbarOld