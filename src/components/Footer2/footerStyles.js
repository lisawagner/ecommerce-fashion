import styled from 'styled-components';
import { DEVICE } from '../../constants/Breakpoints';


export const FooterWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: pink;
  
`

export const FooterCol = styled.div`
  flex: 100%;
  margin: 2em 1em;
  gap: 10px;
  

  @media ${DEVICE.laptop} {
    flex: 25%;
  }
  

`

export const ColumnTitle = styled.h3``

export const FooterLink = styled.a``


