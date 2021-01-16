import React from "react";
import styled from "styled-components";
import { Text, SIZE, FONT_WEIGHT } from "./components/Text";
import { Routes } from "./Routes";
import COLORS from "./styles/colors";
import { useUserIsAuthenticated } from "./hooks/useUserIsAuthenticated";
import AppContext from "./contexts/appContext";

const App = () => {
  const userIsAuthenticated = useUserIsAuthenticated();

  console.log(userIsAuthenticated);

  return (
    <AppContext.Provider value={{ userIsAuthenticated }}>
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
  width: 800px;
  height: 600px;
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
