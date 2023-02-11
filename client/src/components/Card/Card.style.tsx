import styled, {css} from 'styled-components'

export const CardWrapper = styled.div(
    ({ theme: {color} }) => css`
    background: ${color.badgeBackground};
    
    `
)