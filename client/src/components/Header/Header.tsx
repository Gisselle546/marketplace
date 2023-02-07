import React from 'react'
import styled, {css} from 'styled-components'
import logo from '../../assets/images/logo.png';
import Image from 'next/image';

import { HeaderContainer, LogoContainer, NavItems} from './Header.style'


export const LinkText = styled.a`
 text-decoration: none;
 margin-right: 2rem;
`;

function Header() {
  return (
    <HeaderContainer>
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
        <LinkText href="/">Home</LinkText>
        <LinkText href="/signin">Sign In</LinkText>
        
      </NavItems>
    </HeaderContainer>
  )
}

export default Header