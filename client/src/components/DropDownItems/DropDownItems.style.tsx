import styled, { css } from "styled-components";

export const RentSaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem;
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #f4f3ff;
  }
`;

export const RadioLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: #1a1a2e;
  cursor: pointer;
  user-select: none;
`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #d0d0d8;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: border-color 0.15s ease;

  &:checked {
    border-color: #6c63ff;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #6c63ff;
    color: #1a1a2e;
  }

  &:focus {
    outline: none;
    border-color: #6c63ff;
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.12);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`;

export const RangeHeader = styled.div`
  padding-bottom: 0.25rem;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid #ebebf0;
`;

export const Heading = styled.h2`
  font-size: 0.78rem;
  font-weight: 600;
  color: #52525e;
  margin: 0 0 0.35rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.35rem;
  padding: 0.25rem 0 0.65rem;
`;

export const SmallButton = styled.button(
  ({ theme: { color } }) => css`
    background: #f4f3ff;
    color: #6c63ff;
    padding: 0.45rem 0.75rem;
    text-decoration: none;
    min-width: 40px;
    border: 1px solid #e0dff5;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.78rem;
    transition: all 0.15s ease;

    &:hover {
      background: #6c63ff;
      color: #fff;
      border-color: #6c63ff;
    }

    &:active {
      transform: scale(0.96);
    }
  `,
);

export const RangeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.35rem 0;
  align-items: flex-start;
`;
