import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { SIZE, FONT_WEIGHT, getFontSize, getFontWeight } from "./Text";

import { VscLoading } from "react-icons/vsc";

export const Button = ({
  styleButton,
  style,
  type,
  label,
  onClick,
  isLoading,
}) => {
  return (
    <Container style={style}>
      <StyledButton
        style={styleButton}
        onClick={onClick}
        type={type || "button"}
      >
        {isLoading ? <VscLoading size="22px" color={COLORS.white} /> : label}
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 20px;
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

  &:hover {
    cursor: pointer;
  }
`;
