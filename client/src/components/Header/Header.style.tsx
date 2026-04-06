import styled, { css } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderContainer = styled.header(
  ({ theme: { color } }) => css`
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    width: 100%;
    z-index: 100;
    padding: 0 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);

    @media ${breakpoints.S} {
      padding: 0 2.5rem;
    }

    @media ${breakpoints.M} {
      height: 4.25rem;
      padding: 0 4rem;
    }
  `,
);

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
