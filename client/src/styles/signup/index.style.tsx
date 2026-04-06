import styled, { css } from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

export const SignUpWrapper = styled.div(
  ({ theme: { color } }) => css`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 420px;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 2.5rem 2rem;

    @media ${breakpoints.M} {
      padding: 3rem 2.5rem;
    }
  `,
);

export const HeaderSign = styled.h2`
  font-size: 1.75rem;
  margin: 0 0 0.5rem;
  text-align: center;
  font-weight: 800;
  color: #1a1a2e;
  letter-spacing: -0.02em;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;
