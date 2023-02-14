import React from 'react'
import { CardWrapper, Heading, Bottom, Top, SubHeading } from './Card.style'




function Card() {
  return (
    <>
    <CardWrapper>
        <Top>
            top
        </Top>
        <Bottom>
        
            <Heading> $300,000</Heading>
            <SubHeading> 2b | 2a | 3000 sqft</SubHeading>
            <SubHeading> 9401 SW 4th St APT 408</SubHeading>
       
        </Bottom>
    </CardWrapper>
    </>
  )
}

export default Card