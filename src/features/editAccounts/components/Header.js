import React from "react";
import styled from "styled-components";
import { Text, SIZE, FONT_WEIGHT } from "../../../components/Text";
import COLORS from "../../../styles/colors";

export const Header = () => {
  return (
    <Container>
      <Text
        fontWeight={FONT_WEIGHT.bold}
        color={COLORS.white}
        size={SIZE.extraRegular}
      >
        Adicionar/Remover contas do instagram
      </Text>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
