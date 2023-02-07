import styled, {css} from 'styled-components'
import {breakpoints} from "../../styles/breakpoints";

export const HeaderContainer = styled.div(
    ({ theme: {color} }) => css`
      background: ${color.badgeBackground};
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-around;
      height: 4rem;
      width: 100%;
      z-index: 2;
      padding: 0 1.5rem;
  
      @media ${breakpoints.S} {
        padding: 0;
       
      }
  
      @media ${breakpoints.M}{
        height: 72px;
      }
     `
  )


export const LogoContainer = styled.div`
display: flex;
cursor: pointer;

@media screen and (max-width: 800px) {
  padding: 0;
  opacity: 1;
}
`

export const NavItems = styled.div`
display: flex;
align-items: center;

`

