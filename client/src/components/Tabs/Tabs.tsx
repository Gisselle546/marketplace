import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BiBuilding, BiCalendarEvent, BiBath, BiBed } from "react-icons/bi";
import { useAppSelector } from "@/redux/hooks";
import { detailsValue } from "@/redux/reducer/location";

const TabsContainer = styled.div`
  margin: 0.5rem 1.25rem 1.25rem;
  border-radius: 12px;
  display: flex;
  border: 1px solid #ebebf0;
  flex-direction: column;
  overflow: hidden;
`;

const TabsHeader = styled.div(
  ({ theme: { color, typography } }) => css`
    display: flex;
    height: 3rem;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    border-bottom: 1px solid #ebebf0;
    font-size: 0.8rem;
    font-weight: 700;
    color: #1a1a2e;
    background: #fafafa;
  `,
);

const TabInfo = styled.ul`
  list-style-type: none;
  padding: 0.75rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoRow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #52525e;
  margin: 0;

  svg {
    color: #9d9daa;
    flex-shrink: 0;
  }
`;

const Item = styled.p`
  letter-spacing: 0.08em;
  cursor: pointer;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

function Tabs({ agentstate }: any) {
  const data = useAppSelector(detailsValue);
  const [NavLinks, setNav] = useState({
    OverView: true,
  });

  const handleClicky = () => {
    setNav((prevState) => ({
      ...prevState,
      OverView: !NavLinks.OverView,
    }));
  };

  const desc = data?.description;
  const agent = data?.source?.agents?.[0];

  return (
    <TabsContainer>
      <TabsHeader>
        <Item>Overview</Item>
      </TabsHeader>

      {NavLinks.OverView && data && (
        <TabInfo>
          <InfoRow style={{ textTransform: "capitalize" }}>
            <BiBuilding size={15} /> {desc?.type?.replace(/_/g, " ") ?? "N/A"}
          </InfoRow>
          {desc?.year_built && (
            <InfoRow>
              <BiCalendarEvent size={15} /> Built in {desc.year_built}
            </InfoRow>
          )}
          <InfoRow>
            <BiBed size={15} /> {desc?.beds ?? "N/A"} beds
          </InfoRow>
          <InfoRow>
            <BiBath size={15} /> {desc?.baths_full ?? desc?.baths ?? "N/A"}{" "}
            baths
          </InfoRow>
        </TabInfo>
      )}
      {agentstate && agent && (
        <TabInfo>
          <InfoRow>{agent.office_name}</InfoRow>
        </TabInfo>
      )}
    </TabsContainer>
  );
}

export default Tabs;
