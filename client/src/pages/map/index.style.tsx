import styled, {css} from 'styled-components';
import { breakpoints } from '@/styles/breakpoints';


export const MapWrapper = styled.div(
    ({ theme: {color} }) => css`
        display: flex;
        justify-content: space-between;
    `)

export const Description = styled.div(
        ({ theme: {color} }) => css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height:90vh;
        overflow: scroll;
        @media ${breakpoints.M} {
           
            width: 25%;
          }

    `)

export const Map = styled.div(
    ({ theme: {color} }) => css`
 
        
         display: none;
         @media ${breakpoints.S} {
           display: block;
           width: 75%;
         }
    `
)