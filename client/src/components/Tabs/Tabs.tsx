import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import { BiBuilding, BiCalendarEvent, BiBath, BiBed, BiErrorAlt } from "react-icons/bi";
import { useAppSelector } from '@/redux/hooks';
import { detailsValue } from '@/redux/reducer/location';
import { GiCommercialAirplane, GiModernCity } from 'react-icons/gi';

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





function Tabs({agentstate}:any) {
  const data = useAppSelector(detailsValue)
  const [NavLinks, setNav] = useState({
    OverView: true,
   
  })

  const handleClicky = () =>{
    setNav((prevState)=>({
      ...prevState,
      OverView: !NavLinks.OverView
    }))
  }

  console.log(data, 'agent')
  return (
    <TabsContainer>
        <TabsHeader>
          <Item>Overview</Item>
      
        </TabsHeader>

      {  NavLinks.OverView &&<TabInfo>
        {
          data.prop_status!=='for_rent'?
          (
            <>
              <p style={{textTransform:'capitalize'}}> <BiBuilding/> {data.display_property_type}</p>
              <p> <BiCalendarEvent/> Built in {data.listings[0].year_built}</p> 
              <p> <BiBed/> {data.listings[0].beds} beds</p>
              <p> <BiBath/> {data.listings[0].baths_full} baths</p>
            </>
          )
         :
         (
          <>
             <p style={{textTransform:'capitalize'}}> <BiBuilding/> {data.prop_type}</p>
             <p> <BiBed/> {data?.beds} beds</p>
            <p> <BiBath/> {data?.baths_full} baths</p>
            {
              data.pet_policy==='no_policy'?<p> <BiErrorAlt/> No Pets allowed</p> : data.permissions.cats && data.permissions.dogs && <p> Cats and dogs allowed</p>
            }
            <p>Noise Level: </p>
            <TabInfo>
             <p><GiCommercialAirplane/> {data?.noise?.airport_text}</p>
             <p><GiModernCity/> {data?.noise?.local_text}</p>
            </TabInfo>
          </>
         )
        }
        </TabInfo>
      }
      {
        agentstate&&<TabInfo>
         <p> {data.agent.office_name}</p>
         <p> {data.agent.name}</p>
         <p>{data.agent.email} </p>
        </TabInfo>
      
      }
    </TabsContainer>
  )
}

export default Tabs