import React from 'react'
import styled, {css} from 'styled-components'

const TabsContainer = styled.div`
height: 40rem;
margin-top: 1rem; 
border-radius: 5%; 
display: flex; 
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const TabsHeader = styled.div(
    ({ theme: {color} }) => css`
display: flex;
height: 5rem;
width: 100%;
border-bottom: 1px solid ${color.buttonSecondary};
`
)

function Tabs() {
  return (
    <TabsContainer>
        <TabsHeader>
            Tabs
        </TabsHeader>
    </TabsContainer>
  )
}

export default Tabs