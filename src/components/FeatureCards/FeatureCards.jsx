import React from 'react'
import { departments } from "../../constants/data";
import Card from './Card'
import styled from 'styled-components'
import { DEVICE } from '../../constants/Breakpoints';

const FeatureWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0.5rem;

  @media ${DEVICE.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 14rem));
  }

  @media ${DEVICE.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));
  }

  @media ${DEVICE.laptopL} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 26rem));
  }
`

const FeatureCards = () => {
  return (
    <FeatureWrap>
    {/* <h1>FeatureCards</h1> */}
    {departments.map ((item) => (
      <Card item={item} key={item.id} />
    ))}
    
    </FeatureWrap>
  )
}

export default FeatureCards