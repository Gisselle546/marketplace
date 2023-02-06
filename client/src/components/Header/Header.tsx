import React from 'react'
import logo from '../../assets/images/logo.png';
import Link from 'next/link'
import Image from 'next/image';

import { HeaderContainer, LogoContainer, NavItems } from './Header.style'

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
        <Link href="/">Home</Link>
        <Link href="/signin">Sign In</Link>
        
      </NavItems>
    </HeaderContainer>
  )
}

export default Header