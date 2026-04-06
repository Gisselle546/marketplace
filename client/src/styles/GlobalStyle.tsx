import { createGlobalStyle, css } from "styled-components";
import { breakpoints } from "./breakpoints";
import { resetCSS } from "./CSSReset";

export const GlobalStyle = createGlobalStyle(
  ({ theme: { color } }) => css`
    ${resetCSS}
    * {
      transition: all 200ms ease;
      transition-property: background-color, color, border-color, box-shadow,
        transform, opacity;
    }
    html {
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      background: ${color.screenBackground};
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      line-height: 1.6;
      letter-spacing: -0.011em;
    }

    * {
      box-sizing: border-box;
      color: #1a1a2e;
    }

    ::selection {
      background: rgba(108, 99, 255, 0.2);
      color: #1a1a2e;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      letter-spacing: -0.025em;
      line-height: 1.2;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #d0d0d8;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #8e8e9a;
    }

    /* Leaflet popup overrides */
    .leaflet-popup-content-wrapper {
      border-radius: 12px !important;
      padding: 0 !important;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12) !important;
      border: 1px solid #ebebf0;
      overflow: hidden;
    }

    .leaflet-popup-content {
      margin: 0 !important;
      width: auto !important;
    }

    .leaflet-popup-tip {
      box-shadow: none !important;
      border: 1px solid #ebebf0;
    }
  `,
);
