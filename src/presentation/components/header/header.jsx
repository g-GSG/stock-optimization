import React from 'react'
import { HeaderStyled } from './header.styles'

function Header({children}){
  return (
    <HeaderStyled>
      {children}
    </HeaderStyled>
  )
}

export default Header