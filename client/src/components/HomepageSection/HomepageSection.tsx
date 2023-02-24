import React from 'react'
import { HomepageSectionWrapper } from './HomepageSection.style'
import styled, {css} from 'styled-components'
import img from '../../assets/images/Homepagesection.jpg';
import Button from '../Button/Button';
import { useAppSelector } from '@/redux/hooks';
import { selectValue } from '@/redux/reducer/register';
import { useRouter } from 'next/router'
import { breakpoints } from '@/styles/breakpoints';

const Backgroundimage = styled.div(
    ({ theme: {color, borderRadius} }) => css`
    background: url(${img.src}) center/cover;
    height: 40%;
    width: 60%;
    margin-left: 1rem;
    @media ${breakpoints.M}{
      height: 80%;
      width: 40%;
    }
 `
)

const Header = styled.h2(
  ({ theme: {typography} }) => css`
  font-size: ${typography.fontSize.body};
  margin-left: 0.4rem;
  @media ${breakpoints.S}{
   font-size: ${typography.fontSize.heading3};
    }
  `
)

function HomepageSection() {
  const count = useAppSelector(selectValue);
  const router = useRouter()
  
  
  return (
    <HomepageSectionWrapper>
       
             
             
             <div>
             <Header> Find your perfect home</Header> 
              {count?<><Button onClick={()=>router.push('/map')}> Check Homes Near You</Button> </>:  <><Button onClick={()=>router.push('/signin')}>Sign Up Today</Button></>}
              </div>
              
        
        <Backgroundimage/>
    </HomepageSectionWrapper>
  )
}

export default HomepageSection