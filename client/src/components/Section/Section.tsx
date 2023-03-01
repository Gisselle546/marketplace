import styled, { css } from 'styled-components'
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';
import tear from '../../assets/images/tear.png';
import { useAppDispatch } from '@/redux/hooks';
import { getRealEstateData } from '@/redux/reducer/location';
import DropDown from '../DropDown/DropDown';

const Container = styled.div(
    ({ theme: { color } }) => css`
    height: 6vh;
    display: flex;
    flex-direction: column;
    background-color: #fff;

    `
)


const Content = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
padding: 1.2rem;



`;

const Content_Data = styled.div`
    background: url(${tear.src}) no-repeat;
    height:40px;
`



function Section() {
   const dispatch = useAppDispatch()
   const attributes = [
    {key: 0, label: ' For Sale'},
    {key: 1, label: ' For Rent'}
   ];

   const price_attribute = [
    {key: 0, label: ' For Sale'},
    {key: 1, label: ' For Rent'}
   ]

   
   const handleChoice = (e: any) =>{
    console.log(e.target);
   }

   return(
    <Container>
        <Content>
          <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
                selectProps={{
                  placeholder: "Enter address, or zipcode..",
                  onChange: async ({ value }:any) => {
                    const data = await geocodeByAddress(value.description);
                    let geo = { lat: data[0].geometry.location.lat(), lng: data[0].geometry.location.lng()} 
                    
                    let datawoef:any = {state_code: '', city: '', geo}

                    value.terms.length>4? (datawoef.state_code = value.terms[3].value, datawoef.city= value.terms[2].value ) :(datawoef.state_code = value.terms[1].value, datawoef.city= value.terms[0].value )
                     
                    await dispatch(getRealEstateData({type: 'sale', data: datawoef}))
                   
                  },
                  styles: {
                    input: (provided: any) => ({
                      ...provided,
                      borderRadius: '4px',
                      minWidth:'350px',
                      outline:'none'
                    }),
                  },
                }}
              />
              <div style={{display: 'flex', justifyContent:'space-around', width: '100%'}}>
              <DropDown label='For Sale'>ho</DropDown>
              <DropDown label='Price'>hoo</DropDown>
              <DropDown label='Beds & Baths'> hoooo</DropDown>
              </div>
               
        </Content>
       <Content_Data/>    
    </Container>
   )
}

export default Section;