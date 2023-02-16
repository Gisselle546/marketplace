import styled, {css} from 'styled-components';

export const CreateWrapper = styled.div(
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
