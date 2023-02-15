import React from 'react'
import { ButtonWrapper } from './Button.style'

type ButtonProps={
    children:any
    large?:any
    onClick?: () => void
  
}

function Button({children, ...props}:ButtonProps) {
  return (
    <ButtonWrapper type="submit" {...props}>
        {children}
    </ButtonWrapper>
  )
}

export default Button