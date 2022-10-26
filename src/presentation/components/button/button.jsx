import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({
  children,
  onClick,
  backgroundColor,
  hoverBackgroundColor,
  disabled,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
