import styled from 'styled-components'

export const ButtonStyled = styled.button`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border: 0;
  border-radius: 10px;
  margin: ${props => props.margin};
  color: white;

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 10px 10px hsl(327, 43%, 79%);
  }

  &:active:after {
    opacity: 0.75;
    transition: 0s;
    box-shadow: 0 0 0 0 #E0B1CB;
  }
`