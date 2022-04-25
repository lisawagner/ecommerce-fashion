import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`

`
const Centre = styled.div``
const Right = styled.div``


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>left</Left>
            <Centre>centre</Centre>
            <Right>right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar