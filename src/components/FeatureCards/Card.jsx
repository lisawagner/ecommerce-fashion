import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DEVICE } from '../../constants/Breakpoints';

const CardWrap = styled.div`
  overflow: hidden;
  box-shadow: 0 2px 20px #e1e5ee;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* cursor: pointer;
  transition: transform 200ms ease-in; */
  background-color: ${ props => props.bg };
  `

const CardBody = styled.div`
  height: 460px;
  

  @media ${DEVICE.tablet} {
    height: 460px;
  }

  @media ${DEVICE.laptopL} {
    height: 550px;
  }
`

const CardImage = styled.img`
  height: 18rem;
  width: 100%;
  object-fit: cover;

  @media ${DEVICE.tablet} {
    height: 18rem;
  }

  @media ${DEVICE.laptopL} {
    height: 24rem;
  }
`

const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardTitle = styled.h2`
  color: white;
  padding: 1rem;
`

const CardDesc = styled.p`
`

const CardBtn = styled.button`
  padding: 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  border: 2px solid white;
  background: transparent;
  color: white;
  border-radius: 0.2rem;



  /* transition: background 200ms ease-in, color 200ms ease-in; */
`

const Card = ({item}) => {
  return (
    <CardWrap bg={item.bg}>
      <CardBody>
        <CardImage src={item.img} alt=""/>
        <DetailsWrap>
          <CardTitle>{item.title}</CardTitle>
          <Link to="products">
            <CardBtn>discover</CardBtn>
          </Link>
        </DetailsWrap>

      </CardBody>
    </CardWrap>
  )
}

export default Card