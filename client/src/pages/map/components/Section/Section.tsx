import styled, { css } from 'styled-components'
import React, { Component } from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';

const Container = styled.div(
    ({ theme: { color } }) => css`
    height: 5vh;
    display: flex;
    background-color: #fff;
    border-bottom: 2px solid grey;

    `
)


const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100%;

`;

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
    </Container>
  )
