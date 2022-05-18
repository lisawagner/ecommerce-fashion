import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: rgba(0, 0, 0, 0.1); */
    /* background-color: coral; */
    /* background-color: rgba(255, 127, 80, 0.1); */
    z-index: 3;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  const Container = styled.div`
    flex: 1;
    margin: 2px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #f5fbfd; */
    /* border: 5px solid var(--blue-violet); */
    background: white;
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s; */
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
      /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2); */
    }
  `;
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.1rem 1rem;
    transition: all 0.5s ease;
    &:hover {
      color: white;
      background: var(--teal);
      transform: scale(1.1);
    }
  `;
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info >
          <Link to="cart">
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
          </Link>

          <Link to="product">
            <Icon>
              <SearchOutlined />
            </Icon>
          </Link>
{/* TODO: favourites list page */}
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;
  