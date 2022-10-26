import React from 'react'
import { InputStyled, InputWrapper } from './input.styles'

function Input({ id, label, name, onChange, placeholder, type, value, width, props }) {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <InputStyled
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        width={width}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  )
}

export default Input