import styled from "styled-components";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";


const Container = styled.div`
  display: flex;
  margin: auto 2rem;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  margin-top: 3rem;
`;
const Desc = styled.div`
  margin-bottom: 1rem;
`;
const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
    flex: 2;
    display: flex;
`
const Col = styled.div`
    flex: 1;
    padding: 20px;
    margin: auto 1rem;
`
const Title = styled.h3`
  margin-bottom: 1.5rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
    <Left>
      <Logo>PHENOMINA.</Logo>
      <Desc>
        <p>Embrace the power of serendipity. Wear exactly what you want. As long as you are true to yourself, you will look wonderful. </p>
        <p>The real joy in fashion comes from wearing exactly what you want so that, when you look in the mirror, you see you, not someone else.</p>
        <p>Be your favourite version of yourself.</p>    
      </Desc>
      <SocialContainer>
        <SocialIcon color="#ff7f50">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="#008080">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="#8F42FF">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="#008fc7">
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
    </Left>
    <Center>
    <Col>
        <Title>Shop</Title>
        <List>
          <ListItem>Essentials</ListItem>
            <ListItem>Day Styles</ListItem>
            <ListItem>Party Time</ListItem>
            <ListItem>Active Wear</ListItem>        
            <ListItem>Accessories</ListItem>
            <ListItem>Favourites</ListItem>       
        </List>
    </Col>
    <Col>
        <Title>Info</Title>
        <List>
            <ListItem>My Account</ListItem>
            <ListItem>Customer Service</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Store Locator</ListItem>           
            <ListItem>Gift Cards</ListItem>
            <ListItem>Terms</ListItem>
        </List>
    </Col>
    </Center>
    <Col>
      <Title>Contact</Title>
      <ContactItem>
        <Room style={{marginRight:"10px"}}/> 1980 Vulcan Path, Southern Alberta 98336
      </ContactItem>
      <ContactItem>
        <Phone style={{marginRight:"10px"}}/> +1 234 567 8000
      </ContactItem>
      <ContactItem>
        <MailOutline style={{marginRight:"10px"}} /> support@yesyes.com
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
    </Col>
  </Container>
  )
}

export default Footer