import styled, {css} from 'styled-components'

export const ButtonWrapper = styled.button(
    ({ theme: {color} }) => css`
      display: flex;
      padding:1rem;
      background-color: ${color.buttonSecondary};
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      cursor: pointer;
      
  `
)