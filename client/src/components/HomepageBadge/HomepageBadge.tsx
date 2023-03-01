import React from 'react'
import Button from '../Button/Button';
import styled, {css} from 'styled-components' 
import { HomepageBadgeWrapper } from './HomepageBadge.style'

type HomePageBadgeProps = {
    title: string;
    description: string;
    buttondesc: string;
    Click?: any
    logo?: string;
}

const Spacing = styled.div`
  margin-bottom: 1.5rem;
`

function HomepageBadge({title, description, buttondesc, logo, Click}: HomePageBadgeProps) {
  return (
   <HomepageBadgeWrapper>
    <div style={{background:`url(${logo}) center/cover`, height:'400px', width:'100%'}}></div>
    <h2>{title}</h2>
    <p>{description}</p>
    <Spacing/>
    <Button onClick={Click}>{buttondesc}</Button>
   </HomepageBadgeWrapper>
  )
}

export default HomepageBadge