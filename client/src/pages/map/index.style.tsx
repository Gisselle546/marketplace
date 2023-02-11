import styled, {css} from 'styled-components';

export const MapWrapper = styled.div(
    ({ theme: {color} }) => css`
        display: flex;
        justify-content: space-between;
    `)

export const Description = styled.div(
        ({ theme: {color} }) => css`
        width: 30vw;
    `)

export const Map = styled.div(
    ({ theme: {color} }) => css`
        width: 70vw;
    `
)