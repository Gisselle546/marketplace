import React from 'react';
import styled, {css} from 'styled-components'
import Card from '../Card/Card';
import { dummy_data } from '@/dummydata/data';
const CardListWrapper = styled.div`
    
`;

const list = dummy_data.map((card:any, i:any)=>{
  return <Card key={i}card={card}/>
})

function CardList() {
  return (
    <CardListWrapper>
      {list}
    </CardListWrapper>
  )
}

export default CardList