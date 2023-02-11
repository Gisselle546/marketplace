import styled, { css } from 'styled-components'
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';
import tear from '../../../../assets/images/tear.png';

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
padding: 1rem;



`;

const Content_Data = styled.div`
    background: url(${tear.src}) no-repeat;
    height:40px;
`



export const Section = () => (
    <Container>
        <Content>
          <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}
                selectProps={{
                  placeholder: "Enter address, or zipcode..",
                  onChange: async ({ value }:any) => {
                    
                    const data = await geocodeByAddress(value.description);
                    console.log(data);
                    console.log(data[0].geometry.location.lat(), 'lat');
                    console.log(data[0].geometry.location.lng(), 'lng')
                  },
                  styles: {
                    input: (provided: any) => ({
                      ...provided,
                      borderRadius: '4px',
                      minWidth:'350px',
                      outline:'none',
                      
                    }),
                  },
                }}
              />
       
        </Content>
       <Content_Data/>
           
       
        
    </Container>
  )
