import React, { useState, useRef } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { Arrow, DisplayArea, DropToggler, Inner, Label, Wrapper} from './DropDown.style';


type Props ={
    children: any,
    label: string
}


function DropDown({children, label}: Props) {
 const [isOpen, setOpen] = useState(false)
 

const toggleDropDown = () => {
    setOpen(!isOpen)
  };

  return (
   <>
   <Wrapper>
        <DropToggler
          onClick={toggleDropDown}
          onMouseEnter={()=>setOpen(true)}
        >
          <Label>{label}</Label>
          <Arrow>{isOpen ?  <BiDownArrow size={20} style = {{ verticalAlign: 'middle' }}/> : <BiUpArrow size={20} style = {{ verticalAlign: 'middle' }}/> }</Arrow>
        </DropToggler>
        <DisplayArea>
          {isOpen && (
            <Inner 
              onMouseLeave={()=>setOpen(!isOpen)}
            >
              {children}
            </Inner>
          )}
        </DisplayArea>
      </Wrapper>
   </>
  )
}

export default DropDown