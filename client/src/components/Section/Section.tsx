import styled, { css } from "styled-components";
import React from "react";
import dynamic from "next/dynamic";
import tear from "../../assets/images/tear.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getRealEstateData, paramsValue } from "@/redux/reducer/location";
import DropDown from "../DropDown/DropDown";
import DropDownItems from "../DropDownItems/DropDownItems";
import { breakpoints } from "@/styles/breakpoints";

const Container = styled.div(
  ({ theme: { color } }) => css`
    display: flex;
    flex-direction: column;
    background: ${color.screenBackground};
    border-bottom: 1px solid #e8e8ee;
    padding: 0;
  `,
);

const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 0.65rem 1rem;
  flex-direction: column;
  gap: 0.5rem;
  align-items: stretch;

  @media ${breakpoints.M} {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  min-width: 0;
  max-width: 400px;
`;

const Divider = styled.div`
  display: none;
  @media ${breakpoints.M} {
    display: block;
    width: 1px;
    height: 28px;
    background: #e0e0e8;
    margin: 0 0.25rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  @media ${breakpoints.M} {
    flex-wrap: nowrap;
    gap: 0.4rem;
  }
`;

function Section() {
  const dispatch = useAppDispatch();
  const params = useAppSelector(paramsValue);

  const PlacesAutocomplete = dynamic(
    () => import("../PlacesAutocomplete/PlacesAutocomplete"),
    { ssr: false },
  );

  const handlePlaceSelect = async (place: {
    lat: number;
    lng: number;
    formattedAddress: string;
    addressComponents: any[];
  }) => {
    const geo = { lat: place.lat, lng: place.lng };
    let city = "";
    let state_code = "";
    for (const comp of place.addressComponents) {
      const types: string[] = comp.types || [];
      if (types.includes("locality")) {
        city = comp.longText || comp.long_name || "";
      }
      if (types.includes("administrative_area_level_1")) {
        state_code = comp.shortText || comp.short_name || "";
      }
    }
    await dispatch(
      getRealEstateData({
        type: params.type || "sale",
        data: { state_code, city, geo },
      }),
    );
  };

  return (
    <Container>
      <Content>
        <SearchWrapper>
          <PlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
            placeholder="Search address, city, or zip…"
            onSelect={handlePlaceSelect}
            variant="section"
          />
        </SearchWrapper>
        <Divider />
        <Buttons>
          <DropDown label={params.type === "rent" ? "For Rent" : "For Sale"}>
            <DropDownItems type="rentsale" />
          </DropDown>
          <DropDown label="Price">
            <DropDownItems type="price" />
          </DropDown>
          <DropDown label="Beds & Baths">
            {" "}
            <DropDownItems type="bedsbath" />
          </DropDown>
        </Buttons>
      </Content>
    </Container>
  );
}

export default Section;
