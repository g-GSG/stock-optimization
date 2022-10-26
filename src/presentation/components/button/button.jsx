import React from "react";
import { ButtonStyled } from "./button.styles";

function Button({
  id,
  backgroundColor,
  children,
  height,
  margin,
  type,
  width,
}) {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      type={type}
      width={width}
      height={height}
      margin={margin}
    >
      {children}
    </ButtonStyled>
  );
}

export default Button;
