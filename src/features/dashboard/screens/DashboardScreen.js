import React from "react";
import styled from "styled-components";
import COLORS from "../../../styles/colors";
import { Header } from "../components/Header";
import { Options } from "../components/Options";

export const DashboardScreen = () => {
  return (
    <Container>
      <Header />
      <Options />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.background};
  padding: 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;
