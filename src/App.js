import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { firebaseAuth } from "./services/firebase";
import RoutesContext from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import { Text } from "./components/Text";
import { Routes } from "./routes/Routes";

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
          <Text>Processando...</Text>
        ) : (
          <Routes />
        )}
      </Container>
    </RoutesContext.Provider>
  );
};

const Container = styled.div`
  width: 600px;
  height: 600px;
`;

export default App;
