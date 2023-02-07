import React from 'react'
import { HomepageBadgeWrapper } from './HomepageBadge.style'

type HomePageBadgeProps = {
    title: string;
    description: string;
}


function HomepageBadge({title, description}: HomePageBadgeProps) {
  return (
   <HomepageBadgeWrapper>
    hi
   </HomepageBadgeWrapper>
  )
}

export default HomepageBadge