import styled, { css } from "styled-components";
import React from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
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

  .css-13cymwt-control,
  .css-t3ipsp-control {
    border-radius: 10px;
    border: 1px solid #e0e0e8;
    min-height: 40px;
    font-size: 0.85rem;
    background: #f8f8fa;
    box-shadow: none;
    transition: border-color 0.15s ease, background 0.15s ease;

    &:hover {
      border-color: #6c63ff;
    }
  }

  .css-t3ipsp-control {
    border-color: #6c63ff;
    background: #fff;
    box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.08);
  }

  .css-1dimb5e-singleValue {
    font-size: 0.85rem;
    color: #1a1a2e;
  }

  .css-1jqq78o-placeholder {
    font-size: 0.83rem;
    color: #9d9daa;
  }
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

  return (
    <Container>
      <Content>
        <SearchWrapper>
          <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
            selectProps={{
              placeholder: "Search address, city, or zip…",
              noOptionsMessage: ({ inputValue }: any) =>
                inputValue ? "No results found" : null,
              openMenuOnClick: false,
              openMenuOnFocus: false,
              onChange: async ({ value }: any) => {
              const data = await geocodeByAddress(value.description);
              let geo = {
                lat: data[0].geometry.location.lat(),
                lng: data[0].geometry.location.lng(),
              };

              let datawoef: any = { state_code: "", city: "", geo };

              value.terms.length > 4
                ? ((datawoef.state_code = value.terms[3].value),
                  (datawoef.city = value.terms[2].value))
                : ((datawoef.state_code = value.terms[1].value),
                  (datawoef.city = value.terms[0].value));

              await dispatch(
                getRealEstateData({ type: "sale", data: datawoef }),
              );
            },
            styles: {
              input: (provided: any) => ({
                ...provided,
                fontSize: "0.85rem",
              }),
              control: (provided: any) => ({
                ...provided,
              }),
            },
          }}
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
