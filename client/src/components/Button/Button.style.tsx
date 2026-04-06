import styled, { css } from "styled-components";

export const ButtonWrapper = styled.button(
  ({ theme: { color } }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background-color: ${(props: any) =>
      props.disabled ? "#D0D0D8" : color.buttonSecondary};
    border: none;
    border-radius: 8px;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    cursor: ${(props: any) => (props.disabled ? "default" : "pointer")};
    box-shadow: 0 2px 8px rgba(108, 99, 255, 0.25);
    &:hover {
      background-color: ${(props: any) =>
        props.disabled ? "#D0D0D8" : color.buttonSecondaryHover};
      transform: ${(props: any) =>
        props.disabled ? "none" : "translateY(-1px)"};
      box-shadow: ${(props: any) =>
        props.disabled
          ? "0 2px 8px rgba(108, 99, 255, 0.25)"
          : "0 4px 16px rgba(108, 99, 255, 0.35)"};
    }
    &:active {
      transform: translateY(0);
    }
  `,
);
