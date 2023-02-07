import styled, {css} from 'styled-components';

export const SignUpWrapper = styled.div(
    ({ theme: {color} }) => css`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
justify-content: space-around;
height:40vh;

`;