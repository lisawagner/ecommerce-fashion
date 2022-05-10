import React from 'react'

import { FooterWrap, FooterCol, ColumnTitle, FooterLink} from './footerStyles'

const Footer2 = () => {
  return (
    <FooterWrap>

      <FooterCol>
        <ColumnTitle>PHENOMENA</ColumnTitle>
        <p>Embrace the power of serendipity. Wear exactly what you want. As long as you are true to yourself, you will look wonderful.</p>
        <p>The real joy in fashion comes from wearing exactly what you want so that, when you look in the mirror, you see you, not someone else.</p>
        <p>Be your favourite version of yourself</p>
        <h3>Social Links</h3>
      </FooterCol>

      <FooterCol>
        <ColumnTitle>Shop</ColumnTitle>
        <FooterLink>Collections</FooterLink>
        <FooterLink>Clothing</FooterLink>
        <FooterLink>Accessories</FooterLink>
        <FooterLink>Essence of Phenomena</FooterLink>

      </FooterCol>

      <FooterCol>
        <ColumnTitle>Info</ColumnTitle>
        <FooterLink>My Account</FooterLink>
        <FooterLink>Cutomer Service</FooterLink>
        <FooterLink>Order Tracking</FooterLink>
        <FooterLink>Store Locator</FooterLink>
        <FooterLink>Gift Cards</FooterLink>
        <FooterLink>Terms</FooterLink>
      </FooterCol>

      <FooterCol>
        <ColumnTitle>Contact</ColumnTitle>
        <FooterLink>Address</FooterLink>
        <FooterLink>Phone Number</FooterLink>
        <FooterLink>Email</FooterLink>
        <FooterLink>image of credit cards</FooterLink>
        <FooterLink>Language settings</FooterLink>

      </FooterCol>

      </FooterWrap>
  )
}

export default Footer2