import React from 'react'
import styled, {css} from 'styled-components'
import { FooterContainer, LogoContainer, NavItems, CopyRight } from './Footer.style'
import Image from 'next/image';
import logo from '../../assets/images/logo.png';

export const LinkText = styled.a`
 text-decoration: none;
 margin-right: 0.3rem;
`;

const Spacing = styled.div`
margin-bottom: 4.5rem;
`

function Footer() {
  return (
    <FooterContainer>
      
        
          <LogoContainer>
            <Image
            alt="logo"
            src={logo}
            width={80}
            height={80}
            style={{height:'99%'}}
          />
        </LogoContainer>
        
        
      <NavItems>

        <div>
          <h3>Contact Us</h3>
          <p>Buy a Home</p>
          <p>Rent a Home</p>
          
        </div>
        
        <div style={{marginLeft:'6rem'}}>
        <h3>About Us</h3>
        <p>The Brand</p>
        <p>Our Mission</p>
        </div>
        
       </NavItems>
       <Spacing/>
       <CopyRight>&copy; 2023 All Rights Reserved.</CopyRight>
     

    </FooterContainer>
  )
}

export default Footer