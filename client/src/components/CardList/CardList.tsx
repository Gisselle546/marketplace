import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { useAppSelector } from "@/redux/hooks";
import { resultsValue, statusValue } from "@/redux/reducer/location";
import { Spinner } from "../Spinner/Spinner";

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  padding: 0.6rem;
  width: 100%;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const ResultCount = styled.p`
  font-size: 0.75rem;
  color: #9d9daa;
  padding: 0.6rem 0.75rem 0;
  margin: 0;
  font-weight: 500;
`;

function CardList() {
  const data = useAppSelector(resultsValue);
  const loading = useAppSelector(statusValue);

  if (loading === "loading") {
    return <Spinner />;
  }
  return (
    <>
      <ResultCount>{data.length} results</ResultCount>
      <CardListWrapper>
        {data.map((card: any, i: any) => {
          return <Card key={i} card={card} />;
        })}
      </CardListWrapper>
    </>
  );
}

export default CardList;
