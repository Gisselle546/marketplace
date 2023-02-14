import styled, {css} from 'styled-components'

export const CardWrapper = styled.div(
    ({ theme: {color} }) => css`
    background: ${color.badgeBackground};
    height:15rem;
    width:18rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius:10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 1rem;
    cursor: pointer;
    `
)

export const Heading = styled.div(
    ({ theme: {color, typography} }) => css`
     font-size: ${typography.fontSize.heading3}
    `)

export const Bottom = styled.div`
height: 6rem;
background-color: blue;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Top = styled.div`

`;