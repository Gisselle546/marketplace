import React from 'react'
import { ButtonWrapper } from './Button.style'

type ButtonProps={
    children:any
    large?:any
}

function Button({children, large}:ButtonProps) {
  return (
    <ButtonWrapper>
        {children}
    </ButtonWrapper>
  )
}

export default Button