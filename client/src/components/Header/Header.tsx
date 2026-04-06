import React from "react";
import styled, { css } from "styled-components";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

import { HeaderContainer, LogoContainer, NavItems } from "./Header.style";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectValue, logout } from "@/redux/reducer/register";
import Link from "next/link";
import Button from "../Button/Button";
import { useRouter } from "next/router";

const NavLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  color: #52525e;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  &:hover {
    color: #6c63ff;
    background: rgba(108, 99, 255, 0.06);
  }
`;

const SignInButton = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  color: #fff;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  background: #6c63ff;
  cursor: pointer;
  &:hover {
    background: #5a52e0;
  }
`;

const MapButton = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  color: #fff;
  padding: 0.45rem 1.1rem;
  border-radius: 8px;
  background: #6c63ff;
  cursor: pointer;
  &:hover {
    background: #5a52e0;
  }
`;

function Header() {
  const count = useAppSelector(selectValue);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isMapPage = router.pathname === "/map";

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <Image
            alt="logo"
            src={logo}
            width={40}
            height={40}
            style={{ height: "auto" }}
          />
        </Link>
      </LogoContainer>

      <NavItems>
        <NavLink href="/">Home</NavLink>
        {count ? (
          <>
            {!isMapPage && <MapButton href="/map">Map</MapButton>}
            <NavLink
              href="/"
              onClick={() => {
                dispatch(logout);
              }}
            >
              Log Out
            </NavLink>
          </>
        ) : (
          <SignInButton href="/signin">Sign In</SignInButton>
        )}
      </NavItems>
    </HeaderContainer>
  );
}

export default Header;
