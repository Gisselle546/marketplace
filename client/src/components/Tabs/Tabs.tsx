import React from 'react'
import styled, {css} from 'styled-components'
import { dummy_data } from '@/dummydata/data';
import { BiBuilding, BiCalendarEvent } from "react-icons/bi";

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
justify-content: center;
border-bottom: 1px solid ${color.buttonSecondary};
font-size: ${typography.fontSize.heading4};
font-weight: ${typography.fontWeight.bold};
color: ${color.buttonPrimary}

`
);

const TabInfo = styled.ul`
list-style-type: none;

`
const Item = styled.p`
letter-spacing: 8px;
`



const data = dummy_data[1];
console.log(data);

function Tabs() {
  return (
    <TabsContainer>
        <TabsHeader>
          <Item>Overview</Item>
        </TabsHeader>
        <TabInfo>
         <p style={{textTransform:'capitalize'}}> <BiBuilding/> {data.description.sub_type}</p>
         <p> <BiCalendarEvent/> Built in {data.description.year_built}</p>
        </TabInfo>

    </TabsContainer>
  )
}

export default Tabs