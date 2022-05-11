import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DEVICE } from '../../constants/Breakpoints';

const CardWrapper = styled.div`
`

const Slide = styled.div.attrs(
  props => ({ className: props.className, })
  )`
  height: 100vh;
  width: 100%;
  position: relative;
  /* display: inline-block; */
  display: flex;
  background-color: ${ props => props.bg };

  &.inactive {
    display: none;
  }
`

const ImgContainer = styled.div`
  position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
`

const InfoContainer = styled.div`
padding-top: 16px;
    padding-left: 16px;
    padding-bottom: 71px;
    

    @media ${DEVICE.tablet} {
        padding-top: 24px;
        padding-left: 56px;
        padding-bottom: 56px;
    }

    @media ${DEVICE.laptop} {
        padding-left: 66px;
    }
`

const Image = styled.img`
  /* width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 999; */

  display: block;
  max-width: 100%;
  height: auto;

  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h1``

const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid black;
  /* border-radius: 2px; */
  cursor: pointer;
  `

const CardContent = ({ activeIndex, sliderItems }) => {
  return (
    <CardWrapper>
      {sliderItems.map((item, index) => (
        <Slide
          bg={item.bg}
          key={index}
          className={index === activeIndex ? "" : "inactive"}
        >
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>    
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Link to="products">
              <Button>{item.btn}</Button>
            </Link>
          </InfoContainer>
        </Slide>
      ))}

    </CardWrapper>
  )
}

export default CardContent