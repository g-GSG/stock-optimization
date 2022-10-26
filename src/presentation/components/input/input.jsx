import React from 'react'
import { InputStyled, InputWrapper } from './input.styles'

function Input({ id, label, placeholder, type, width }) {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <InputStyled id={id} placeholder={placeholder} type={type} width={width} />
    </InputWrapper>
  )
}

export default Input