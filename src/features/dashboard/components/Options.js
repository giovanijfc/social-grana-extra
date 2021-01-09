import React from "react";
import styled from "styled-components";
import { Card } from "../../../components/Card";

import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { VscRunAll } from "react-icons/vsc";
import COLORS from "../../../styles/colors";
import { useOptionsHandler } from "../hooks/useOptionsHandler";

export const Options = () => {
  const {
    navigateToEditAccounts,
    navigateToExecute,
    navigateToPurchaseLicense,
  } = useOptionsHandler();

  return (
    <Container>
      <Card
        onClick={navigateToExecute}
        title="Executar ações"
        description="Execute o bot para começar a ganhar!"
        labelButton="Executar"
        icon={<VscRunAll size="30px" color={COLORS.primary} />}
      />
      <Card
        onClick={navigateToPurchaseLicense}
        title="Comprar licença"
        description="Compre uma licença para utilizar o bot e comece a faturar!"
        labelButton="Comprar licença"
        icon={<BiPurchaseTagAlt size="30px" color={COLORS.primary} />}
      />
      <Card
        onClick={navigateToEditAccounts}
        title="Adicionar/Remover contas"
        description="Adicionar/Remover contas do instagram"
        labelButton="Adicionar/Remover"
        icon={
          <WrapperColumn>
            <AiOutlineUserAdd size="30px" color={COLORS.primary} />
            <AiOutlineUserDelete size="30px" color={COLORS.primary} />
          </WrapperColumn>
        }
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin-top: 30px;
`;

const WrapperColumn = styled.div`
  display: flex;
`;
