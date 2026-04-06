import styled, { css } from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

export const FooterContainer = styled.footer(
  ({ theme: { color } }) => css`
    background: #0f0f1a;
    padding: 4rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `,
);

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media ${breakpoints.M} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 320px;
`;

export const BrandDescription = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  line-height: 1.7;
  margin: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

export const FooterColumns = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;

  @media ${breakpoints.M} {
    gap: 4rem;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ColumnTitle = styled.h4`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 0.5rem;
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0.15rem 0;
  &:hover {
    color: #8b83ff;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media ${breakpoints.M} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CopyRight = styled.p`
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.8rem;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    background: rgba(108, 99, 255, 0.2);
    color: #8b83ff;
  }
`;
