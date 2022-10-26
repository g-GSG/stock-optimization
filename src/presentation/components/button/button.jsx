import React from 'react'
import { ButtonStyled } from './button.styles'

function Button({ backgroundColor, children, height, margin, type, width, ...props }) {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      type={type}
      width={width}
      height={height}
      margin={margin}
      {...props}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button