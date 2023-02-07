import styled, {css} from 'styled-components';

export const SignInWrapper = styled.div(
    ({ theme: {color} }) => css`
    background: ${color.badgeBackground};
    height: 60vh;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 7px;
    width: 30vw;
    `
)


export const HeaderSign = styled.h2`
font-size:1.4rem;
margin-top:1.4rem;
text-align:center;
letter-spacing: 2px;

`;

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
width: 100%; 
align-items: center;
justify-content: space-evenly;
height:40vh;

`;