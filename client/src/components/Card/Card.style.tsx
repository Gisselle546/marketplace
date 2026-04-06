import styled, { css } from "styled-components";

export const CardWrapper = styled.div(
  ({ theme: { color } }) => css`
    background: ${color.screenBackground};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    overflow: hidden;
    border: 1px solid #ebebf0;
    transition: box-shadow 0.2s ease, transform 0.15s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
      border-color: #d0d0d8;
    }
  `,
);

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  overflow: hidden;
`;

export const Heading = styled.p`
  font-size: 1rem;
  color: #1a1a2e;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.01em;
`;

export const SubHeading = styled.p`
  font-size: 0.7rem;
  color: #9d9daa;
  margin: 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.72rem;
  color: #52525e;
  font-weight: 500;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.45rem 0.55rem;
`;

export const Badge = styled.span`
  position: absolute;
  top: 6px;
  left: 6px;
  background: rgba(26, 26, 46, 0.75);
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 0.58rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const PhotoCount = styled.span`
  position: absolute;
  bottom: 6px;
  right: 6px;
  background: rgba(26, 26, 46, 0.7);
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 0.58rem;
  font-weight: 500;
  padding: 0.15rem 0.4rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 3px;
`;
