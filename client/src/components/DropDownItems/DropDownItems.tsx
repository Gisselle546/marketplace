import React, { useState } from 'react'
import Select from '../Select/Select'
import { RentSaleContainer, Radio, RadioInput, RadioLabel, Container,RangeHeader, Heading, SmallButton, ButtonContainer } from './DropDownItems.style'

type DropDownItemsProps = {
    type?: 'rentsale' | 'price' | 'bedsbath',
   
}


function DropDownItems({type}:DropDownItemsProps) {


    const handleRadio = (e :any)=>{
        console.log(e.target.value)
    }

    switch(type){
        case 'rentsale':
            return(
                <>
                <RentSaleContainer>
                    <Radio>
                        <RadioInput id="radio-1" name="radio" type="radio" onChange={handleRadio} value="sale" />
                        <RadioLabel htmlFor="radio-1">For Sale</RadioLabel>
                    </Radio>
                        
                    <Radio>
                        <RadioInput id="radio-2" name="radio" type="radio" value="rent"/>
                        <RadioLabel  htmlFor="radio-2" >For Rent</RadioLabel>
                    </Radio>
                </RentSaleContainer>
                </>
            )
        case 'price':
            return(
                <Container>
                 <RangeHeader>
                    <Heading>Price Range</Heading>
                 </RangeHeader>
                 <div style={{display: 'flex', justifyContent:'space-evenly', padding: '1rem'}}>
                    <Select/>
                    <Select/>
                 </div>
                </Container>
            )
        case 'bedsbath':
            return(
                <Container>
                 <>
                    <Heading style={{textAlign:'center'}}>Beds & Baths</Heading>
                 </>
                
                    <Heading>Beds</Heading>
                 
                 <ButtonContainer>
                    <SmallButton>1</SmallButton>
                    <SmallButton>2</SmallButton>
                    <SmallButton>3</SmallButton>
                    <SmallButton>4+</SmallButton>
                 </ButtonContainer>
                 
                    <Heading>Baths</Heading>
                
                 <ButtonContainer>
                    <SmallButton>1</SmallButton>
                    <SmallButton>2</SmallButton>
                    <SmallButton>3</SmallButton>
                    <SmallButton>4+</SmallButton>
                 </ButtonContainer>
                </Container>
            )
      }
  return (
    <div>DropDownItems</div>
  )
}

export default DropDownItems