import styled, {css} from 'styled-components'

export const ButtonWrapper = styled.button(
    ({ theme: {color}}, ) =>  css`
      display: flex;
      padding:1rem;
      background-color: ${(props: any )=>props.disabled? '#e0e2e1': color.buttonSecondary}};
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      cursor: ${(props: any )=>props.disabled? 'default': 'pointer'}};
      
  `
)