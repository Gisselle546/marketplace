import React from "react";
import {
  CardWrapper,
  ImageContainer,
  Heading,
  Bottom,
  SubHeading,
  DetailRow,
  Badge,
  PhotoCount,
} from "./Card.style";
import { useAppDispatch } from "@/redux/hooks";
import { setDetail } from "@/redux/reducer/location";
import imageplace from "../../assets/images/placeholderimg.png";
import { BiCamera } from "react-icons/bi";

type Props = {
  card: any;
};

function Card({ card }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setDetail(card));
  };

  const imgSrc = card?.primary_photo?.href || imageplace.src;
  const price =
    card?.list_price?.toLocaleString("en-US") ||
    card?.list_price_min?.toLocaleString("en-US") ||
    "—";
  const beds = card?.description?.beds ?? card?.description?.beds_max ?? "—";
  const baths = card?.description?.baths ?? card?.description?.baths_max ?? "—";
  const sqft = card?.description?.sqft ?? card?.description?.sqft_min ?? "—";
  const photoCount = card?.photos?.length ?? 0;

  return (
    <CardWrapper onClick={handleClick}>
      <ImageContainer>
        <img
          src={imgSrc}
          alt={card?.location?.address?.line || "Property"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Badge>{card?.status === "for_rent" ? "Rent" : "Sale"}</Badge>
        {photoCount > 1 && (
          <PhotoCount>
            <BiCamera /> {photoCount}
          </PhotoCount>
        )}
      </ImageContainer>
      <Bottom>
        <Heading>${price}</Heading>
        <DetailRow>
          {beds} bd &middot; {baths} ba &middot;{" "}
          {typeof sqft === "number" ? sqft.toLocaleString() : sqft} sqft
        </DetailRow>
        <SubHeading>
          {card?.location?.address?.line}, {card?.location?.address?.city}
        </SubHeading>
      </Bottom>
    </CardWrapper>
  );
}

export default Card;
