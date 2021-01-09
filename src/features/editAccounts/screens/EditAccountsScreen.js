import React from "react";
import styled from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { Header } from "../components/Header";
import COLORS from "../../../styles/colors";
import { AddAccount } from "../components/AddAccount";
import { AccountList } from "../components/AccountList";

export const EditAccountsScreen = () => {
  return (
    <Container>
      <BackButton />
      <Header />
      <AddAccount />
      <AccountList />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.background};
`;
