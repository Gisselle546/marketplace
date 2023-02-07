import React from 'react'
import styled, {css} from 'styled-components' 

const InputWrapper = styled.input`
width: 100%,
padding: 1.8rem, 1.5rem,
margin: 1rem 0;
`;

type InputProps = {
    name: string;
    placeholder: string;
    onChange:any;
    value: string;
}




function Input({name, placeholder, onChange, value}:InputProps) {
  return (
   <InputWrapper name={name} placeholder={placeholder} value={value}/>
  )
}

export default Input