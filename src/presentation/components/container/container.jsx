import React from 'react'
import { ContainerStyled } from './container.styles'

function Container({children, ...props}){
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}

export default Container