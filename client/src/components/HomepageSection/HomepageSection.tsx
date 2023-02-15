import React from 'react'
import { HomepageSectionWrapper } from './HomepageSection.style'
import styled, {css} from 'styled-components'
import img from '../../assets/images/Homepagesection.jpg';
import Button from '../Button/Button';
import { useAppSelector } from '@/redux/hooks';
import { selectValue } from '@/redux/reducer/register';


const Backgroundimage = styled.div(
    ({ theme: {color, borderRadius} }) => css`
    background-image: url(${img.src});
    height: 80%;
    width: 50%;
 `
)

function HomepageSection() {
  const count = useAppSelector(selectValue);
  return (
    <HomepageSectionWrapper>
        <div>
            <h2> Find your perfect home</h2>
            {
              count? <Button> Check Homes Near You</Button>: <Button>Sign Up Today</Button>
            }
        </div>
        <Backgroundimage/>
    </HomepageSectionWrapper>
  )
}

export default HomepageSection