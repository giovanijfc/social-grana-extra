import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { Text, SIZE, FONT_WEIGHT, getFontSize, getFontWeight } from "./Text";
import { Button } from "./Button";

export const Card = ({ style, icon, title, description, labelButton }) => {
  return (
    <Container style={style}>
      <Text
        style={{ textAlign: "center" }}
        fontWeight={FONT_WEIGHT.regular}
        color={COLORS.white}
        size={SIZE.regular}
      >
        {title}
      </Text>

      {icon}

      <Text
        style={{ textAlign: "center" }}
        fontWeight={FONT_WEIGHT.regular}
        color={COLORS.white}
        size={SIZE.small}
      >
        {description}
      </Text>

      <Button
        label={labelButton}
        style={{ width: "100%", height: "30px" }}
        styleButton={{
          fontSize: getFontSize(SIZE.small),
          ...getFontWeight(FONT_WEIGHT.bold),
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 30%;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  padding: 5px;
  background-color: ${COLORS.backgroundLight};
  border-radius: 6px;
`;
