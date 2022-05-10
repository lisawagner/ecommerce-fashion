import { useState } from 'react'
import { Link } from 'react-router-dom';
import { sliderItems } from "../../constants/data";

import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos} from 'react-icons/md'

import { Container, Arrow, Wrapper, Slide, SlideWrapper, ImgContainer, Image, InfoContainer, Title, Desc, Button } from './heroStyles'

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
      if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={ () => handleClick("left") }>
          <MdOutlineArrowBackIosNew />
      </Arrow>
      <Wrapper slideIndex={slideIndex} >

          {sliderItems.map( (item) => (
              <Slide bg={item.bg} key={item.id}>
                  <SlideWrapper>
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
                  </SlideWrapper>
              </Slide>                
          ) )}

      </Wrapper>
      <Arrow direction='right' onClick={ () => handleClick("right") }>
          <MdOutlineArrowForwardIos />
      </Arrow>
    </Container>
    )
}

export default Hero