import styled, {css, ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import React from 'react';

import { breakpoints } from '../src/styles/breakpoints'
import { GlobalStyle } from '../src/styles/GlobalStyle'
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

  
  