import styled, {css} from 'styled-components'

export const HomepageSectionWrapper = styled.div(
    ({ theme: {color} }) => css`
    background-color: ${color.badgeBackground};
    height:40vh;
    display:flex;
    align-items: center;
    justify-content:center;

`)