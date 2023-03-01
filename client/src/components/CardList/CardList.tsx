import React from 'react';
import styled, {css} from 'styled-components'
import Card from '../Card/Card';
import { useAppSelector } from '@/redux/hooks';
import { resultsValue, geoValue, paramsValue } from '@/redux/reducer/location';



const CardListWrapper = styled.div`
    
`;


function CardList() {

const data = useAppSelector(resultsValue);
const geo = useAppSelector(geoValue);
const params = useAppSelector(paramsValue);
console.log(data);

  
  return (
    <>
    <CardListWrapper>
      {
        data.map((card:any, i:any)=>{
          return <Card key={i} card={card}/>
        })
      }
    </CardListWrapper>
</>
  )
}

export default CardList