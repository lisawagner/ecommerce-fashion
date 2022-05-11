import styled from 'styled-components'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrows">
      <Arrow direction='left' onClick={prevSlide}>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Arrow direction='right' onClick={nextSlide}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </div>
  )
}

export default Arrows