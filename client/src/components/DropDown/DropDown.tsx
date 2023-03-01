import React, { useState, useRef } from 'react'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { Arrow, DisplayArea, DropToggler, Inner, Label, Wrapper} from './DropDown.style';


type Props ={
    children: any,
    label: string
}


function DropDown({children, label}: Props) {
 const [isOpen, setOpen] = useState(false)


const attributes= [
    {key: 0 , label: 'For Sale'},
    {key: 1 , label: 'For Rent'}
]

const handleChoice = () =>{

}

const toggleDropDown = () => {
    //const { onChange } = this.props;

    setOpen(!isOpen)

   // onChange && onChange(!isOpen);
  };

  return (
   <>
   <Wrapper>
        <DropToggler
          onClick={toggleDropDown}
          //ref={ref => (this.dropTogglerRef = ref)}
        >
          <Label>{label}</Label>
          <Arrow>{isOpen ?  <BiDownArrow size={20} style = {{ verticalAlign: 'middle' }}/> : <BiUpArrow size={20} style = {{ verticalAlign: 'middle' }}/> }</Arrow>
        </DropToggler>
        <DisplayArea>
          {isOpen && (
            <Inner 
             // ref={ref => (this.displayAreaRef = ref)}
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