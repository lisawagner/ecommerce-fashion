import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { DEVICE } from '../../constants/Breakpoints';

export const Container = styled.div`
display: flex;

`

export const Arrow = styled.div`
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
export const Wrapper = styled.div`
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

export const Slide = styled.div`

    background-color: ${ props => props.bg };

`

export const SlideWrapper = styled.div`
    grid-template-columns: none;
    grid-column-end: span 3;
    grid-row-end: span 6;

    @media ${DEVICE.tablet} {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-column-end: span 6;
        grid-row-end: span 3;
        align-items: center;
    }
`

export const ImgContainer = styled.div`
    /* height: 100%;
    flex: 1; */
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
`
export const Image = styled.img`
    /* height: 100%; */
    display: block;
    max-width: 100%;
    height: auto;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
export const InfoContainer = styled.div`
    padding-top: 16px;
    padding-left: 16px;
    padding-bottom: 71px;
    

    @media ${DEVICE.tablet} {
        padding-top: 24px;
        padding-left: 56px;
        padding-bottom: 56px;
    }

    @media ${DEVICE.laptop} {
        padding-left: 66px;
    }

`
export const Title = styled.h1`
    /* font-size: 70px; */
`
export const Desc = styled.p`
    /* margin: 50px 0; */
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid black;
    /* border-radius: 2px; */
    cursor: pointer;
`