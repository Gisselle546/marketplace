import React, { useState } from "react";
import Select from "../Select/Select";
import {
  RentSaleContainer,
  Radio,
  RadioInput,
  RadioLabel,
  Container,
  RangeHeader,
  Heading,
  SmallButton,
  ButtonContainer,
  RangeContainer,
} from "./DropDownItems.style";
import {
  geoValue,
  getRealEstateData,
  paramsValue,
} from "@/redux/reducer/location";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

type DropDownItemsProps = {
  type?: "rentsale" | "price" | "bedsbath";
};

function DropDownItems({ type }: DropDownItemsProps) {
  const params = useAppSelector(paramsValue);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState<string>(params.type);
  const geo = useAppSelector(geoValue);

  console.log(params);

  const handleRadio = async (e: any) => {
    setSelected(e.target.value);
    await dispatch(
      getRealEstateData({ type: e.target.value, data: { ...params, geo } }),
    );
  };

  const handleClick = (option: any, type: any) => {
    console.log(option.value, type);
    let pricemin;
    let pricemax;

    option.value === "max"
      ? (pricemax = { price_max: option.value })
      : (pricemin = { ...params, price_min: option.value });
    let updatedData = {
      type: params.type,
      data: { ...params, geo, ...pricemin, ...pricemax },
    };
    dispatch(getRealEstateData(updatedData));
  };

  const handlebath = (e: any) => {
    let updatedData = {
      type: params.type,
      data: { ...params, geo, baths_min: e.target.value },
    };
    dispatch(getRealEstateData(updatedData));
  };

  const handlebed = (e: any) => {
    let updatedData = {
      type: params.type,
      data: { ...params, geo, beds_min: e.target.value },
    };
    dispatch(getRealEstateData(updatedData));
  };

  switch (type) {
    case "rentsale":
      return (
        <>
          <RentSaleContainer>
            <Radio>
              <RadioInput
                id="radio-1"
                name="radio"
                type="radio"
                onChange={handleRadio}
                checked={selected === "sale"}
                value="sale"
              />
              <RadioLabel htmlFor="radio-1">For Sale</RadioLabel>
            </Radio>

            <Radio>
              <RadioInput
                id="radio-2"
                name="radio"
                type="radio"
                onChange={handleRadio}
                checked={selected === "rent"}
                value="rent"
              />
              <RadioLabel htmlFor="radio-2">For Rent</RadioLabel>
            </Radio>
          </RentSaleContainer>
        </>
      );
    case "price":
      return (
        <Container>
          <RangeHeader>
            <Heading>Price Range</Heading>
          </RangeHeader>
          <RangeContainer>
            <Select value={handleClick} type="Min" />
            <Select value={handleClick} type="Max" />
          </RangeContainer>
        </Container>
      );
    case "bedsbath":
      return (
        <Container>
          <Heading>Beds</Heading>
          <ButtonContainer>
            <SmallButton onClick={handlebath} value="1">
              1
            </SmallButton>
            <SmallButton onClick={handlebath} value="2">
              2
            </SmallButton>
            <SmallButton onClick={handlebath} value="3">
              3
            </SmallButton>
            <SmallButton onClick={handlebath} value="4">
              4+
            </SmallButton>
          </ButtonContainer>
          <Heading>Baths</Heading>
          <ButtonContainer>
            <SmallButton onClick={handlebed} value="1">
              1
            </SmallButton>
            <SmallButton onClick={handlebed} value="2">
              2
            </SmallButton>
            <SmallButton onClick={handlebed} value="3">
              3
            </SmallButton>
            <SmallButton onClick={handlebed} value="4">
              4+
            </SmallButton>
          </ButtonContainer>
        </Container>
      );
  }
  return <div>DropDownItems</div>;
}

export default DropDownItems;
