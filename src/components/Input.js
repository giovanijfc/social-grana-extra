import React, { forwardRef } from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { getFontSize, getFontWeight, SIZE, FONT_WEIGHT, Text } from "./Text";

export const Input = forwardRef(
  ({ style, label, type, maxLength, error, name }, ref) => {
    return (
      <Container style={style}>
        <ContainerInput>
          <Text
            color={COLORS.white}
            fontWeight={FONT_WEIGHT.regular}
            size={SIZE.regular}
          >
            {label}
          </Text>

          <WrapperInput>
            <StyledInput
              name={name}
              ref={ref}
              maxLength={maxLength}
              type={type}
            />
          </WrapperInput>
        </ContainerInput>

        {error && (
          <Text
            color={COLORS.errorDark}
            fontWeight={FONT_WEIGHT.light}
            size={SIZE.small}
            style={{ marginTop: "2px", marginLeft: "3px" }}
          >
            {error}
          </Text>
        )}
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  flex-direction: column;
`;

const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  flex-direction: column;
`;

const WrapperInput = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3px;
  background-color: ${COLORS.white};
  border-radius: 8px;
`;

const fontSizeStyle = getFontSize(SIZE.regular);
const fontWeightStyle = getFontWeight(FONT_WEIGHT.regular);

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0px 10px 0px 10px;
  font-size: ${fontSizeStyle};
  font-weight: ${fontWeightStyle};
  outline: none;
  border-radius: 8px;
  border: none;
`;
