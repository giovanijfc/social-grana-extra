import React, { useContext } from "react";
import routesContext from "./RoutesContext";
import { LoginScreen } from "../features/auth/screens/LoginScreen";

export const Routes = () => {
  const routes = useContext(routesContext);

  console.log(routes);

  if (routes.isAuthenticated === false) {
    return <LoginScreen />;
  }

  switch (routes.currentRoute) {
    case "/":
      return <div>AUTENTICADO</div>;
    default:
      return <div>ROTA NÃO ENCONTRADA</div>;
  }
};
