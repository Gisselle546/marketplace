import styled, { css } from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

export const MapWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  height: calc(100vh - 72px);
`;

export const Description = styled.div(
  ({ theme: { color } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    background: ${color.screenBackground};

    /* Thin scrollbar */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #d0d0d8;
      border-radius: 3px;
    }

    @media ${breakpoints.M} {
      width: 38%;
      min-width: 340px;
      max-width: 520px;
      border-right: 1px solid #e8e8ee;
    }
  `,
);

export const Map = styled.div(
  ({ theme: { color } }) => css`
    display: none;
    @media ${breakpoints.S} {
      display: block;
      flex: 1;
    }
  `,
);
