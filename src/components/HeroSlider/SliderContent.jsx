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
  background-color: ${ props => props.bg };
  
  &.inactive {
    display: none;
    
  }
`

const SlideWrapper = styled.div`
  grid-template-columns: none;
  grid-column-end: span 3;
  /* grid-row-end: span 6; */

  @media ${DEVICE.tablet} {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-column-end: span 6;
    /* grid-row-end: span 3; */
    align-items: center;
  }

`

const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 0;
  padding-top: 100%;
  `
  
const SlideImage = styled.img`
    display: block;
    max-width: 100%;
    height: auto;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media ${DEVICE.laptop} {

    }

`

const InfoWrapper = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 71px;
  
  @media ${DEVICE.tablet} {
    .info-wrapper {
      padding-top: 24px;
      padding-left: 56px;
      padding-bottom: 56px;  
    }
  }

  @media ${DEVICE.laptop} {
    .info-wrapper {
      padding-left: 66px;
    }
  }

`

const SlideTitle = styled.h1`
  font-size: 2.5rem;
  margin: 1rem auto;

  @media ${DEVICE.laptop} {
    font-size: 3rem;
  }
`

const SlideText = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const SlideButton = styled.button`
  margin: 1rem 0;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`

const SliderContent = ({ activeIndex, sliderItems }) => {
  return (
    <CardWrapper slideIndex={activeIndex} >
      {sliderItems.map((slide, index) => (
        <Slide
          bg={slide.bg}
          key={index}
          className={index === activeIndex ? "slides active" : "slides inactive"}
        >
          <SlideWrapper>

            <ImgWrapper>
              <SlideImage src={slide.img} alt="" />
            </ImgWrapper>
            <InfoWrapper>
              <SlideTitle>{slide.title}</SlideTitle>
              <SlideText>{slide.desc}</SlideText>
              <Link to="products">
                <SlideButton>{slide.btn}</SlideButton>
              </Link>
            </InfoWrapper>

          </SlideWrapper>
        </Slide>
      ))}
    </CardWrapper>
  )
}

export default SliderContent