import React from 'react'
import styled, {css} from 'styled-components'
import { CardWrapper, Heading, Bottom, SubHeading } from './Card.style'
import { useAppDispatch } from '@/redux/hooks';
import { getDetailsData} from '@/redux/reducer/location';
import imageplace from '../../assets/images/placeholderimg.png'

type Props ={
  card:any
}



const Container = styled("div")<{img: any }>`
 background: url(${(props: any) => props.img}) center/cover;
 height: 100%;
 width: 100%;
`

function Card({card}:Props) {
  const dispatch = useAppDispatch();

 const handleClick = () =>{

  dispatch(getDetailsData(card.property_id))
 }

  return (
    <>
    <CardWrapper onClick={handleClick}>
        <Container img={card?.primary_photo===null ? imageplace.src : card?.primary_photo?.href}>
        </Container>
        <Bottom>
        
            <Heading> ${card?.list_price?.toLocaleString("en-US")? card?.list_price?.toLocaleString("en-US") : card.list_price_min}</Heading>
            <SubHeading> {card.description.beds? card.description.beds : card.description.beds_max} bd | {card.description.baths ? card.description.baths: card.description.baths_max} ba | {card.description.sqft ?card.description.sqft: card.description.sqft_min } sqft</SubHeading>
            <SubHeading> {card.location.address.line}</SubHeading>
       
        </Bottom>
    </CardWrapper>
    </>
  )
}

export default Card