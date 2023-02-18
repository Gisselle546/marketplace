import React from 'react'
import styled from 'styled-components'

const TabsContainer = styled.div`
height: 40rem;
margin-top: 1rem; 
border-radius: 5%; 
display: flex; 
justify-content: center; 
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

function Tabs() {
  return (
    <TabsContainer>
        Tabs
    </TabsContainer>
  )
}

export default Tabs