import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from "../../constants/data";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";

const CarouselWrap = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
`

const len = sliderItems.length - 1;

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <CarouselWrap>
      <SliderContent activeIndex={activeIndex} sliderItems={sliderItems} />
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

export default HeroSlider