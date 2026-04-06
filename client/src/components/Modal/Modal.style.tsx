import { breakpoints } from "@/styles/breakpoints";
import styled from "styled-components";

export const MainHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1.25rem;

  @media ${breakpoints.M} {
    padding: 1.25rem 1.75rem;
  }
`;

export const InnerMainHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const PriceHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const StatusBadge = styled.span<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 20px;
  margin-top: 0.25rem;
  width: fit-content;
  background: ${({ $active }) =>
    $active ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)"};
  color: ${({ $active }) => ($active ? "#16a34a" : "#dc2626")};
`;

export const StatusDot = styled.span<{ $active?: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "#16a34a" : "#dc2626")};
`;
