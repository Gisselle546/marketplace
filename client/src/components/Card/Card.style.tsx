import styled, {css} from 'styled-components'

export const CardWrapper = styled.div(
    ({ theme: {color} }) => css`
    background: ${color.badgeBackground};
    height:17rem;
    width:21rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius:10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 1.5rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover { 
      transform: translateY(-10px) scale(1.03); 
    }
    
    `
)

export const Heading = styled.div(
    ({ theme: {color, typography} }) => css`
     font-size: ${typography.fontSize.heading3};
     color: #fff;
     margin-left:1rem;
    `)

export const SubHeading = styled.div(
        ({ theme: {color, typography} }) => css`
         font-size: ${typography.fontSize.body};
         color: #fff;
         margin-left:1rem;
        `)

export const Bottom = styled.div(
 ({ theme: {color} }) => css`
height: 6rem;
display: flex;
flex-direction: column;
justify-content: space-evenly;
background-color: rgba(0,0,54,0.7);
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding-bottom:0.5rem;
`
);