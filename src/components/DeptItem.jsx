import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* top: 0;
  left: 0; */
  /* width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(0,0,0,0.6); */
  background-color: ${ props => props.bg };
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.25);
    color:black;
    cursor: pointer;
    font-weight: 600;
`;

const DeptItem = ( {item} ) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info bg={item.bg}>
            <Title>{item.title}</Title>
            <Button>discover</Button>
        </Info>
    </Container>
  )
}

export default DeptItem