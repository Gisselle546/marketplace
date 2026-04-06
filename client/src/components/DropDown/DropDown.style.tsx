import styled, { css } from "styled-components";

export const Wrapper = styled.div(
  ({ theme: { color } }) => css`
    display: inline-flex;
    position: relative;
    flex-direction: column;
    transition: all 200ms ease;
  `,
);

export const DropToggler = styled.div`
  position: relative;
  padding: 8px 14px;
  border: 1px solid #e0e0e8;
  border-radius: 10px;
  font-size: 13px;
  color: #52525e;
  cursor: pointer;
  background: #f8f8fa;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover {
    border-color: #6c63ff;
    background: #fff;
    box-shadow: 0 2px 8px rgba(108, 99, 255, 0.08);
  }
`;

export const Arrow = styled.span`
  display: flex;
  align-items: center;
  margin-left: 4px;
  color: #9d9daa;
`;

export const DisplayArea = styled.div`
  position: relative;
`;

export const Inner = styled.div`
  position: absolute;
  left: 0;
  top: 8px;
  min-width: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  z-index: 99999;
  border: 1px solid #e8e8ee;
  overflow: hidden;
`;

export const Label = styled.span`
  font-size: 0.82rem;
  font-weight: 500;
`;
