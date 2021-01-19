import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import AppContext from "../../../contexts/appContext";
import { start } from "../bot/start";
import { BackButton } from "../../../components/BackButton";

export const ExecuteActionsScreen = () => {
  const { setWindowRunBot, windowRunBot } = useContext(AppContext);

  return (
    <Container>
      <BackButton />
      <Button
        onClick={() => start(setWindowRunBot)}
        type="button"
        label={windowRunBot ? "Parar" : "Começar"}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
`;
