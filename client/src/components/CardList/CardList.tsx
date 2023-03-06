import React from 'react';
import styled, {css} from 'styled-components'
import Card from '../Card/Card';
import { useAppSelector } from '@/redux/hooks';
import { resultsValue, statusValue } from '@/redux/reducer/location';
import { Spinner } from '../Spinner/Spinner';



const CardListWrapper = styled.div`
    
`;


function CardList() {

const data = useAppSelector(resultsValue);
const loading = useAppSelector(statusValue)
console.log(data);

console.log(window.innerWidth)

if(loading==='loading' && window.innerHeight>500){
  return <Spinner/>
}
  
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