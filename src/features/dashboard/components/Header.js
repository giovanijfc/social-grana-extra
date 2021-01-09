import React from "react";
import styled from "styled-components";
import COLORS from "../../../styles/colors";
import { Text, SIZE, FONT_WEIGHT } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { useHeaderHandler } from "../hooks/useHeaderHandler";

export const Header = () => {
  const { email, isLoading, onPressLogout } = useHeaderHandler();

  return (
    <Container>
      <WrapperTitleAndSubtitle>
        <Text
          style={{ width: "100%" }}
          fontWeight={FONT_WEIGHT.semiBold}
          color={COLORS.white}
          size={SIZE.extraMedium}
        >
          Bem vindo {email}
        </Text>

        <Text
          style={{ width: "100%" }}
          fontWeight={FONT_WEIGHT.medium}
          color={COLORS.white}
          size={SIZE.extraRegular}
        >
          Selecione uma opção:
        </Text>
      </WrapperTitleAndSubtitle>

      <Button isLoading={isLoading} onClick={onPressLogout} label="Sair" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const WrapperTitleAndSubtitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
