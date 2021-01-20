import React from "react";
import styled from "styled-components";
import COLORS from "../../../styles/colors";
import { useAccountListHandler } from "../hooks/useAccountListHandler";
import { VscLoading } from "react-icons/vsc";
import { Text, SIZE, FONT_WEIGHT } from "../../../components/Text";
import { CgPlayListRemove } from "react-icons/cg";

export const AccountList = () => {
  const { accounts, isLoading, onClickRemoveAccount } = useAccountListHandler();

  const hasZeroAccounts = accounts.length === 0;

  return (
    <Container>
      <Text
        size={SIZE.medium}
        color={COLORS.white}
        fontWeight={FONT_WEIGHT.semiBold}
      >
        Contas
      </Text>

      <WrapperList isCenter={isLoading || hasZeroAccounts}>
        {hasZeroAccounts ? (
          <Text
            size={SIZE.extraRegular}
            color={COLORS.white}
            fontWeight={FONT_WEIGHT.regular}
          >
            Você não possui nenhuma conta adicionada...
          </Text>
        ) : isLoading ? (
          <VscLoading size="22px" color={COLORS.white} />
        ) : (
          accounts.map((item, index) => (
            <AccountItem
              key={`account-${index}`}
              onClick={onClickRemoveAccount}
              {...item}
              index={index}
            />
          ))
        )}
      </WrapperList>
    </Container>
  );
};

const AccountItem = ({ onClick, email, password, nickname, index }) => {
  return (
    <ContainerItem index={index}>
      <Text
        size={SIZE.regular}
        color={COLORS.white}
        fontWeight={FONT_WEIGHT.semiBold}
      >
        Email: {email}
      </Text>

      <Text
        size={SIZE.regular}
        color={COLORS.white}
        fontWeight={FONT_WEIGHT.semiBold}
      >
        Senha: {password}
      </Text>

      <Text
        size={SIZE.regular}
        color={COLORS.white}
        fontWeight={FONT_WEIGHT.semiBold}
      >
        Apelido: {nickname}
      </Text>

      <RemoveIcon
        onClick={() => onClick({ email, password, nickname })}
        color={COLORS.white}
        size="24px"
      />
    </ContainerItem>
  );
};

const ContainerItem = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 0px 4px 0px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-wrap: normal;
  background-color: ${({ index }) =>
    index % 2 === 1 ? COLORS.gray600 : COLORS.gray800};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
`;

const RemoveIcon = styled(CgPlayListRemove)`
  &::hover {
    cursor: pointer;
  }
`;

const WrapperList = styled.div`
  display: flex;
  width: 100%;
  max-height: 300px;
  justify-content: ${({ isCenter }) => (isCenter ? "center" : "flex-start")};
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  background-color: ${COLORS.backgroundLight};
  overflow-y: auto;
  overflow-x: auto;
`;
