import styled, {css} from 'styled-components'

export const FooterContainer = styled.div(
    ({ theme: {color} }) => css`
    background: ${color.badgeBackground};
    height:7rem;
    display:flex;
    
    `
)