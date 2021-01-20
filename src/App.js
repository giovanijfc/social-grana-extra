import React from "react";
import styled from "styled-components";
import { Text, SIZE, FONT_WEIGHT } from "./components/Text";
import { Routes } from "./Routes";
import COLORS from "./styles/colors";
import { useUserIsAuthenticated } from "./hooks/useUserIsAuthenticated";
import AppContext from "./contexts/appContext";
import { useWindowRunBot } from "./hooks/useWindowRunBot";

const App = () => {
  const userIsAuthenticated = useUserIsAuthenticated();
  const windowRunBot = useWindowRunBot();

  return (
    <AppContext.Provider value={{ userIsAuthenticated, ...windowRunBot }}>
      <Container>
        {userIsAuthenticated === undefined ? (
          <AreaCenter>
            <Text
              fontWeight={FONT_WEIGHT.bold}
              size={SIZE.extraMedium}
              color={COLORS.white}
            >
              Processando...
            </Text>
          </AreaCenter>
        ) : (
          <Routes />
        )}
      </Container>
    </AppContext.Provider>
  );
};

const Container = styled.div`
  width: 1200px;
  height: 800px;
  background: ${COLORS.background};
`;

const AreaCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default App;
