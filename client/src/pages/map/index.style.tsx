import styled, {css} from 'styled-components';

export const MapWrapper = styled.div(
    ({ theme: {color} }) => css`
        display: flex;
        justify-content: space-between;
    `)

export const Description = styled.div(
        ({ theme: {color} }) => css`
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height:90vh;
        overflow: scroll;

    `)

export const Map = styled.div(
    ({ theme: {color} }) => css`
        width: 75%;
    `
)