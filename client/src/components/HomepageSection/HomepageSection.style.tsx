import styled, { css } from "styled-components";
import { breakpoints } from "@/styles/breakpoints";

export const HomepageSectionWrapper = styled.section`
  background: linear-gradient(160deg, #1a1a2e 0%, #2d2b55 60%, #6c63ff 100%);
  padding: 4rem 1.5rem;
  margin: 0 1rem;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  @media ${breakpoints.S} {
    padding: 5rem 4rem;
    margin: 0 2rem;
  }
`;

export const SectionHeadline = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
  max-width: 560px;

  @media ${breakpoints.M} {
    font-size: 2.25rem;
  }
`;

export const SectionTagline = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  text-align: center;
  margin: -1rem 0 0;
  max-width: 480px;
  line-height: 1.6;

  @media ${breakpoints.M} {
    font-size: 1.05rem;
  }
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 700px;

  @media ${breakpoints.M} {
    gap: 3.5rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  min-width: 100px;
`;

export const StatNumber = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.03em;

  @media ${breakpoints.M} {
    font-size: 2.75rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const CTAButton = styled.button`
  background: #fff;
  color: #1a1a2e;
  border: none;
  padding: 0.85rem 2rem;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(108, 99, 255, 0.3);
  }
`;
