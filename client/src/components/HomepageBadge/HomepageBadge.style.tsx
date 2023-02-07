import styled, {css} from 'styled-components'

export const HomepageBadgeWrapper = styled.div(
    ({ theme: {color} }) => css`
      display: flex;
      padding:1rem;
      background-color: ${color.badgeBackground};
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      cursor: pointer;
      height: 34rem;
      width: 24rem;
      margin-right:2rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      
  `
)