import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { sliderItems } from "../../constants/data";

import styled from 'styled-components'
import CardContent from "./CardContent";
import Arrows from './Arrows'

const CarouselWrap = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
`

const len = sliderItems.length - 1;

const Carousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 7000);
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <CarouselWrap>
      <CardContent activeIndex={activeIndex} sliderItems={sliderItems} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
    </CarouselWrap>
  )
}

export default Carousel