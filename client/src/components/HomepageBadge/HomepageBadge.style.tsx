import styled, { css } from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

export const HomepageBadgeWrapper = styled.div(
  ({ theme: { color } }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${color.screenBackground};
    border: 1px solid #e8e8ee;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    width: 100%;
    max-width: 340px;
    height: 420px;
    border-radius: 20px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    @media ${breakpoints.M} {
      max-width: 380px;
      height: 440px;
      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 16px 48px rgba(108, 99, 255, 0.12);
      }
    }
  `,
);
