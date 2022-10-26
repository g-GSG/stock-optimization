import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border: 0;
  border-radius: 10px;
  padding: 0px 10px;
  margin: ${(props) => props.margin};
  color: white;
`;
