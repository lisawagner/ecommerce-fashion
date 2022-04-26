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
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
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
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
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
        Embrace the power of serendipity. Wear exactly what you want. As long as you are true to yourself, you will look wonderful. The real joy in fashion comes from wearing exactly what you want so that, when you look in the mirror, you see you, not someone else. Be your favourite version of yourself.
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
      <Title>Shop</Title>
      <List>
        <ListItem>Day Styles</ListItem>
        <ListItem>Active Wear</ListItem>
        <ListItem>Essentials</ListItem>
        <ListItem>Party Time</ListItem>
        <ListItem>Lounge Wear</ListItem>
        <ListItem>Accessories</ListItem>
      </List>
      <Title>Info</Title>
      <List>
        <ListItem>My Account</ListItem>
        <ListItem>Customer Service</ListItem>
        <ListItem>Store Locator</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Gift Cards</ListItem>
        <ListItem>Terms</ListItem>
      </List>
    </Center>
    <Right>
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
    </Right>
  </Container>
  )
}

export default Footer