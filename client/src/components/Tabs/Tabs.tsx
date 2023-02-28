import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { BiBuilding, BiCalendarEvent, BiBath, BiBed } from "react-icons/bi";
import { useAppSelector } from '@/redux/hooks';
import { detailsValue } from '@/redux/reducer/location';

const TabsContainer = styled.div`
height: 40rem;
margin-top: 1rem; 
border-radius: 5%; 
display: flex; 
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
flex-direction: column;
`;

const TabsHeader = styled.div(
    ({ theme: {color, typography} }) => css`
display: flex;
height: 5rem;
width: 100%;
align-items: flex-end;
justify-content: space-around;
border-bottom: 1px solid ${color.buttonSecondary};
font-size: ${typography.fontSize.body};
font-weight: ${typography.fontWeight.bold};
color: ${color.buttonPrimary}

`
);

const TabInfo = styled.ul`
list-style-type: none;

`
const Item = styled.p`
letter-spacing: 8px;
cursor:pointer;
`





function Tabs() {
  const data = useAppSelector(detailsValue)
  const [NavLinks, setNav] = useState({
    OverView: false,
    home_details: false
  })

  const handleClicky = () =>{
    setNav((prevState)=>({
      ...prevState,
      OverView: !NavLinks.OverView
    
    }))
  }

  return (
    <TabsContainer>
        <TabsHeader>
          <Item onClick={handleClicky}>Overview</Item>
          <Item onClick={handleClicky}>Facts</Item>
        </TabsHeader>
      {  NavLinks.OverView &&<TabInfo>
         <p style={{textTransform:'capitalize'}}> <BiBuilding/> {data.display_property_type}</p>
         <p> <BiCalendarEvent/> Built in {data.listings[0].year_built}</p> 
         <p> <BiBed/> {data.listings[0].beds} beds</p>
         <p> <BiBath/> {data.listings[0].baths_full} baths</p>
        </TabInfo>
      
      }
    </TabsContainer>
  )
}

export default Tabs