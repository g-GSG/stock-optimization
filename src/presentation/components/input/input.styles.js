import styled from 'styled-components'

export const InputStyled = styled.input`
  width: ${props => props.width};
  height: 51px;
  background-color: #D9D9D9;
  border: 0;
  border-radius: 20px;
  padding: 0px 10px;

  &:focus {
    outline: none;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;

  label {
    font-size: 14px;
    padding-bottom: 5px;
  }
`