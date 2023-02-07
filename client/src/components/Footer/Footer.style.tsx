import styled, {css} from 'styled-components'

export const FooterContainer = styled.div(
    ({ theme: {color} }) => css`
    background: ${color.badgeBackground};
    height:16rem;
    display:flex;
    justify-content:space-around;
    flex-direction: column;
    align-items: center;

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
width: 100%;
justify-content:center;

`
export const CopyRight = styled.div(
    ({ theme: {color} }) => css`
     backgound: ${color.screenBackground};
     height: 2rem;
    `
)