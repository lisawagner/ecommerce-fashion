import styled from "styled-components";
import { departments } from "../data";
import DeptItem from "./DeptItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 8rem;
  justify-content: space-between;

`;

const FeaturedDepts = () => {
  return (
    <Container>
        {departments.map( (item) => (
            <DeptItem item={item} key={item.id} />
        ) )}
    </Container>
  )
}

export default FeaturedDepts