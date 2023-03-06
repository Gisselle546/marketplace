import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  width?: string;
  height?: string;
  borderWidth?: string;
  borderColor?: string;
  duration?: number;
  top?: string;
  left?: string;
  style?: any
}

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const SpinnerBody = styled.div<SpinnerProps>`
  height: ${(p) => (p.height ? p.height : "4rem")};
  margin-left: 1rem;
  width: ${(p) => (p.width ? p.width : "4rem")};
  border: ${(p) => (p.borderWidth ? p.borderWidth : "4px")} solid #d1d5db;
  border-top-color: ${(p) => (p.borderColor ? p.borderColor : "#3b82f6")};
  position: absolute;
  top:  ${(p) => (p.top ? p.top : "50%")};
  left: ${(p) => (p.left ? p.left : "50%")};
  border-radius: 50%;
  animation: ${spinnerAnimation}
    ${(p) => (p.duration ? `${p.duration}ms` : "800ms")} linear infinite;
`;

export const Spinner = (props: SpinnerProps) => {

  return <SpinnerBody {...props} />;
};
