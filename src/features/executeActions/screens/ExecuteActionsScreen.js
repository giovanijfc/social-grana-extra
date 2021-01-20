import React from "react";
import styled from "styled-components";
import { BackButton } from "../../../components/BackButton";
import { FormConfig } from "../components/FormConfig";

export const ExecuteActionsScreen = () => {
  return (
    <Container>
      <BackButton />
      <FormConfig />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0px 0 100px 0px;
`;
