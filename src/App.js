import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { firebaseAuth } from "./services/firebase";
import RoutesContext from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import { Text, SIZE, FONT_WEIGHT } from "./components/Text";
import { Routes } from "./routes/Routes";
import COLORS from "./styles/colors";

const App = () => {
  const routes = useRoutes();

  useLayoutEffect(() => {
    const unsubscribeOnAuthStateChanged = firebaseAuth.onAuthStateChanged(
      (user) => {
        routes.setIsAuthenticated(Boolean(user));
      }
    );

    return () => {
      unsubscribeOnAuthStateChanged();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RoutesContext.Provider value={{ ...routes }}>
      <Container>
        {routes.isAuthenticated === undefined ? (
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
    </RoutesContext.Provider>
  );
};

const Container = styled.div`
  width: 600px;
  height: 500px;
  background: ${COLORS.background};
  padding: 20px;
`;

const AreaCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default App;
