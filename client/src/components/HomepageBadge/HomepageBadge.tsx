import React from "react";
import Button from "../Button/Button";
import styled, { css } from "styled-components";
import { HomepageBadgeWrapper } from "./HomepageBadge.style";
import { breakpoints } from "@/styles/breakpoints";

type HomePageBadgeProps = {
  title: string;
  description: string;
  buttondesc: string;
  Click?: any;
  logo?: string;
};

const BadgeImage = styled.div<{ $src?: string }>`
  background: url(${({ $src }) => $src}) center/cover no-repeat;
  width: 100%;
  min-height: 180px;
  @media ${breakpoints.M} {
    min-height: 210px;
  }
`;

const BadgeBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const BadgeTitle = styled.h2`
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a1a2e;
`;

const BadgeDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #6b6b7b;
  margin: 0 0 auto;
`;

function HomepageBadge({
  title,
  description,
  buttondesc,
  logo,
  Click,
}: HomePageBadgeProps) {
  return (
    <HomepageBadgeWrapper>
      <BadgeImage $src={logo} />
      <BadgeBody>
        <BadgeTitle>{title}</BadgeTitle>
        <BadgeDescription>{description}</BadgeDescription>
        <Button onClick={Click}>{buttondesc}</Button>
      </BadgeBody>
    </HomepageBadgeWrapper>
  );
}

export default HomepageBadge;
