import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  detailsValue,
  nullDetail,
  statusValue,
} from "@/redux/reducer/location";
import {
  MainHeadingContainer,
  InnerMainHeadingContainer,
  PriceHeader,
  StatusBadge,
  StatusDot,
} from "./Modal.style";
import { Spinner } from "../Spinner/Spinner";
import { breakpoints } from "@/styles/breakpoints";
import {
  BiX,
  BiCalendarEvent,
  BiBuilding,
  BiMapPin,
  BiArea,
  BiTime,
} from "react-icons/bi";

const Overlay = styled("div")<{ show: any }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(26, 26, 46, 0.5);
  backdrop-filter: blur(6px);
  z-index: 999;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div(
  ({ theme: { color } }) => css`
    position: relative;
    width: 94vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #1a1a2e;
    background: ${color.screenBackground};
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    @media ${breakpoints.M} {
      flex-direction: row;
      width: 90vw;
      max-width: 1200px;
    }
  `,
);

const LeftPanel = styled.div`
  display: none;

  @media ${breakpoints.M} {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    overflow-y: auto;
    background: #f8f8fa;
    border-right: 1px solid #e8e8ee;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 4px;

  & > img:first-child {
    grid-column: 1 / -1;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;

  &:first-child {
    height: 320px;
    border-radius: 8px;
  }
`;

const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media ${breakpoints.M} {
    width: 50%;
  }
`;

const Price = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0;
  letter-spacing: -0.02em;

  @media ${breakpoints.M} {
    font-size: 2rem;
  }
`;

const Details = styled.p`
  font-size: 0.9rem;
  color: #52525e;
  margin: 0;
  font-weight: 500;
`;

const Address = styled.p`
  font-size: 0.85rem;
  color: #6b6b7b;
  margin: 0;
`;

const MonthlyEstimate = styled.div`
  font-size: 0.8rem;
  color: #6b6b7b;
  margin-top: 0.35rem;

  strong {
    color: #1a1a2e;
    font-size: 0.95rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(243, 244, 246, 0.9);
  backdrop-filter: blur(4px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: #52525e;
  font-size: 1.25rem;
  transition: background 0.15s ease;

  &:hover {
    background: #e8e8ee;
    color: #e63946;
  }

  @media ${breakpoints.M} {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 0 1.25rem;

  @media ${breakpoints.M} {
    padding: 0 1.75rem;
  }
`;

const PerMonth = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: #6b6b7b;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin: 0.75rem 1.25rem;
  border: 1px solid #ebebf0;
  border-radius: 12px;
  overflow: hidden;

  @media ${breakpoints.M} {
    margin: 0.75rem 1.75rem;
  }
`;

const InfoCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 0.5rem;
  border-bottom: 1px solid #ebebf0;
  border-right: 1px solid #ebebf0;
  background: #fafafa;

  &:nth-child(even) {
    border-right: none;
  }

  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  font-size: 0.65rem;
  color: #9d9daa;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.04em;
`;

const InfoValue = styled.span`
  font-size: 0.88rem;
  color: #1a1a2e;
  font-weight: 700;
  margin-top: 0.1rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0 1.25rem;
  margin-bottom: 0.5rem;

  @media ${breakpoints.M} {
    padding: 0 1.75rem;
  }
`;

const Tag = styled.span`
  font-size: 0.68rem;
  font-weight: 500;
  color: #6c63ff;
  background: rgba(108, 99, 255, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  text-transform: capitalize;
`;

const ListingMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1.25rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;

  @media ${breakpoints.M} {
    padding: 0 1.75rem;
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  color: #6b6b7b;

  svg {
    color: #9d9daa;
  }
`;

const BrokerageLine = styled.p`
  font-size: 0.7rem;
  color: #9d9daa;
  padding: 0.5rem 1.25rem;
  margin: 0;

  @media ${breakpoints.M} {
    padding: 0.5rem 1.75rem;
  }
`;

type Props = {
  show?: boolean;
};

function Modal(props: Props) {
  const { show } = { ...props };
  const ref = useRef(null);
  const data = useAppSelector(detailsValue);
  const loading = useAppSelector(statusValue);
  const dispatch = useAppDispatch();
  const [clicked, setClicked] = useState(false);

  if (!data) {
    return null;
  }

  if (loading === "loading") {
    return (
      <Overlay show={show}>
        <Spinner />
      </Overlay>
    );
  }

  const handleClose = () => {
    dispatch(nullDetail());
    localStorage.removeItem("detail_location");
  };

  const isRental = data.status === "for_rent";
  const isForSale = data.status === "for_sale";

  const photos = data?.photos?.slice(0, 7) || [];
  const addr = data?.location?.address;
  const desc = data?.description;
  const tags = data?.tags?.slice(0, 8) || [];
  const brokerage = data?.branding?.[0]?.name;
  const listDate = data?.list_date
    ? new Date(data.list_date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Overlay show={show}>
      <Container ref={ref}>
        <CloseButton onClick={handleClose}>
          <BiX size={22} />
        </CloseButton>

        <LeftPanel>
          {photos.length > 0 && (
            <PhotoGrid>
              {photos.map((photo: any, i: number) => (
                <Photo key={i} src={photo.href} alt={`Photo ${i + 1}`} />
              ))}
            </PhotoGrid>
          )}
        </LeftPanel>

        <RightPanel>
          <MainHeadingContainer>
            <InnerMainHeadingContainer>
              <PriceHeader>
                <Price>
                  ${data?.list_price?.toLocaleString("en-US") ?? "—"}
                </Price>
                {isRental && <PerMonth>/mo</PerMonth>}
              </PriceHeader>
              <Details>
                {desc?.beds ?? "—"} bd &middot;{" "}
                {desc?.baths_full ?? desc?.baths ?? "—"} ba &middot;{" "}
                {desc?.sqft?.toLocaleString() ?? "—"} sqft
                {desc?.lot_sqft ? (
                  <> &middot; {desc.lot_sqft.toLocaleString()} sqft lot</>
                ) : null}
              </Details>
              <Address>
                <BiMapPin size={12} style={{ marginRight: 2, flexShrink: 0 }} />
                {addr?.line}, {addr?.city}, {addr?.state_code}{" "}
                {addr?.postal_code}
              </Address>
              <StatusBadge $active={isForSale || isRental}>
                <StatusDot $active={isForSale || isRental} />
                {isRental ? "For Rent" : isForSale ? "For Sale" : "Off Market"}
              </StatusBadge>
            </InnerMainHeadingContainer>
          </MainHeadingContainer>

          <InfoGrid>
            <InfoCell>
              <InfoLabel>Beds</InfoLabel>
              <InfoValue>{desc?.beds ?? "—"}</InfoValue>
            </InfoCell>
            <InfoCell>
              <InfoLabel>Baths</InfoLabel>
              <InfoValue>{desc?.baths_full ?? desc?.baths ?? "—"}</InfoValue>
            </InfoCell>
            <InfoCell>
              <InfoLabel>Sqft</InfoLabel>
              <InfoValue>{desc?.sqft?.toLocaleString() ?? "—"}</InfoValue>
            </InfoCell>
            <InfoCell>
              <InfoLabel>Year Built</InfoLabel>
              <InfoValue>{desc?.year_built ?? "—"}</InfoValue>
            </InfoCell>
            {desc?.garage != null && (
              <>
                <InfoCell>
                  <InfoLabel>Garage</InfoLabel>
                  <InfoValue>{desc.garage}</InfoValue>
                </InfoCell>
                <InfoCell>
                  <InfoLabel>Type</InfoLabel>
                  <InfoValue
                    style={{ textTransform: "capitalize", fontSize: "0.78rem" }}
                  >
                    {desc?.type?.replace(/_/g, " ") ?? "—"}
                  </InfoValue>
                </InfoCell>
              </>
            )}
            {desc?.garage == null && (
              <InfoCell>
                <InfoLabel>Type</InfoLabel>
                <InfoValue
                  style={{ textTransform: "capitalize", fontSize: "0.78rem" }}
                >
                  {desc?.type?.replace(/_/g, " ") ?? "—"}
                </InfoValue>
              </InfoCell>
            )}
          </InfoGrid>

          <ListingMeta>
            {listDate && (
              <MetaItem>
                <BiTime size={14} /> Listed {listDate}
              </MetaItem>
            )}
            {desc?.type && (
              <MetaItem>
                <BiBuilding size={14} />{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {desc.type.replace(/_/g, " ")}
                </span>
              </MetaItem>
            )}
            {desc?.lot_sqft && (
              <MetaItem>
                <BiArea size={14} /> {desc.lot_sqft.toLocaleString()} sqft lot
              </MetaItem>
            )}
          </ListingMeta>

          {tags.length > 0 && (
            <TagList>
              {tags.map((tag: string, i: number) => (
                <Tag key={i}>{tag.replace(/_/g, " ")}</Tag>
              ))}
            </TagList>
          )}

          <ButtonRow>
            <Button disabled={true}>Request a Tour</Button>
            {!isRental && (
              <Button onClick={() => setClicked(!clicked)}>
                Contact Agent
              </Button>
            )}
          </ButtonRow>

          {brokerage && <BrokerageLine>Listed by {brokerage}</BrokerageLine>}

          <Tabs agentstate={clicked} />
        </RightPanel>
      </Container>
    </Overlay>
  );
}

export default Modal;
