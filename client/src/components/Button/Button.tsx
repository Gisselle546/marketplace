import React from 'react'
import { ButtonWrapper } from './Button.style'

type ButtonProps={
    children:any
    style?:any
}

function Button({children}:ButtonProps) {
  return (
    <ButtonWrapper>
        {children}
    </ButtonWrapper>
  )
}

export default Button