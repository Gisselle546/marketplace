import React from 'react'
import styled, {css} from 'styled-components'
import { CardWrapper, Heading, Bottom, SubHeading } from './Card.style'
import img from '../../assets/images/buy.png';

type Props ={
  card:any
}



const Container = styled("div")<{img: any }>`
 background: url(${(props: any) => props.img}) center/cover;
 height: 100%;
 width: 100%;
`

function Card({card}:Props) {
 console.log(card);
  return (
    <>
    <CardWrapper>
        <Container img={card.primary_photo.href}>
        </Container>
        <Bottom>
        
            <Heading> ${card.list_price.toLocaleString("en-US")}</Heading>
            <SubHeading> {card.description.beds} bds | {card.description.baths} bts | {card.description.sqft} sqft</SubHeading>
            <SubHeading> {card.location.address.line}</SubHeading>
       
        </Bottom>
    </CardWrapper>
    </>
  )
}

export default Card