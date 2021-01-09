import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { SIZE, FONT_WEIGHT, getFontSize, getFontWeight } from "./Text";

export const Button = ({ type, label, onClick, isLoading }) => {
  return (
    <Container>
      <StyledButton onClick={onClick} type={type || "button"}>
        {isLoading ? "Processando" : label}
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px 10px 5px 10px;
`;

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  font-size: ${getFontSize(SIZE.extraRegular)};
  border-radius: 6px;
  outline: none;
  border: none;
  z-index: 2;

  ${() => {
    return getFontWeight(FONT_WEIGHT.medium);
  }}
`;
