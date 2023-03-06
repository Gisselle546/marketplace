import { breakpoints } from '@/styles/breakpoints';
import styled from 'styled-components';

export const MainHeadingContainer = styled.div`
    display:flex; 
    justify-content: space-between;
`;

export const InnerMainHeadingContainer = styled.div`
    height: 16rem;
    padding:0.7rem; 
    flex-direction: column; 
    justify-content: space-evenly;
    @media ${breakpoints.M} {
           
        height: 15rem;
        padding:1rem;
      }
`;
export const PriceHeader = styled.div`
    display: flex;
    align-items: center;
`;