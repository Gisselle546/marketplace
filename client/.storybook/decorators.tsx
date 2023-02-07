import React from 'react';
import styled, {css, ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

import { breakpoints } from '../src/styles/breakpoints';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../src/styles/theme'

const ThemeBlock = styled.div<{ left?: boolean; fullScreen?: boolean }>(
    ({ left, fullScreen, theme: { color } }) =>
      css`
        position: absolute;
        top: 0;
        left: ${left ? 0 : '50vw'};
        border-right: ${left ? '1px solid #202020' : 'none'};
        right: ${left ? '50vw' : 0};
        width: 50vw;
        height: 100vh;
        bottom: 0;
        overflow: auto;
        padding: ${fullScreen ? 0 : '1rem'};
        background: ${color.screenBackground};
        ${breakpoints.S} {
          left: ${left ? 0 : '50vw'};
          right: ${left ? '50vw' : 0};
          padding: 0 !important;
        }
      `
  )

  export const withTheme: DecoratorFn = (StoryFn, { globals: { theme = 'light' }, parameters }) => {
    const fullScreen = parameters.layout === 'fullscreen'
    const appTheme = theme === 'light' ? lightTheme : darkTheme
    const secondContainerRef = React.useRef<HTMLDivElement>(null)
  
    const firstBlockRef = React.useCallback(
      (node) => {
        if (node) {
          node.addEventListener('scroll', () => {
            if (secondContainerRef.current) {
              secondContainerRef.current.scrollTop = node.scrollTop
            }
          })
        }
      },
      [secondContainerRef.current]
    )

    switch(theme){
        case 'side-by-side': {
            return (
              <>
                <ThemeProvider theme={lightTheme}>
                  <GlobalStyle />
                  <ThemeBlock ref={firstBlockRef} left fullScreen={fullScreen}>
                    <StoryFn />
                  </ThemeBlock>
                </ThemeProvider>
                <ThemeProvider theme={darkTheme}>
                  <GlobalStyle />
                  <ThemeBlock ref={secondContainerRef} fullScreen={fullScreen}>
                    <StoryFn />
                  </ThemeBlock>
                </ThemeProvider>
              </>
            )
          }
          default: {
            return (
              <ThemeProvider theme={appTheme}>
                <GlobalStyle />
                <StoryFn />
              </ThemeProvider>
            )
          }
    }
}

export const globalDecorators = [withTheme]