import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../../../components/Button";
import AppContext from "../../../contexts/appContext";
import { start } from "../bot/start";

export const ExecuteActionsScreen = () => {
  const { setWindowRunBot, windowRunBot } = useContext(AppContext);

  return (
    <Container>
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
`;
