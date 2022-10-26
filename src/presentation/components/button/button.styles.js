import styled from "styled-components";

export const StyledButton = styled.button((props) => ({
  backgroundColor: props.backgroundColor,
  borderRadius: 10,
  color: "#f0f0f0",
  padding: "8px 16px",
  border: "none",
  minWidth: props.minWidth || "100px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: props.hoverBackgroundColor,
    transition: "background-color 0.2s ease-in-out",
  },

  "&:disabled": {
    backgroundColor: "#c0c0c0",
    cursor: "not-allowed",
  },
}));
