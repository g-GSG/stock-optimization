import React from 'react'
import { InputStyled, InputWrapper } from './input.styles'

function Input({ height, id, label, name, onChange, placeholder, type, value, width, ...props }) {
  return (
    <InputWrapper>
      <label htmlFor={id} style={{fontSize: props.fontSize || '14px'}}>{label}</label>
      <InputStyled
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        height={height}
        width={width}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  )
}

export default Input