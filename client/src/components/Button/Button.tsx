import React from 'react'
import { ButtonWrapper } from './Button.style'

type ButtonProps={
    children:any
    large?:any
    onClick?: () => void
    type?: any
    disabled?: any;
  
}

function Button({children, ...props}:ButtonProps) {
  return (
    <ButtonWrapper  {...props}>
        {children}
    </ButtonWrapper>
  )
}

export default Button