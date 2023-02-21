import styled, {css} from 'styled-components'
import { breakpoints } from '@/styles/breakpoints';

export const HomepageSectionWrapper = styled.div(
    ({ theme: {color} }) => css`
    background-color: ${color.badgeBackground};
    height:40vh;
    display:flex;
    align-items: center;
    justify-content:center;
    padding: 1rem;

    @media ${breakpoints.S} {
        padding: 0;
      }

`)