import React, { useContext } from "react";
import routesContext from "./RoutesContext";
import { LoginScreen } from "../features/auth/screens/LoginScreen";
import { DashboardScreen } from "../features/dashboard/screens/DashboardScreen";

export const Routes = () => {
  const routes = useContext(routesContext);

  console.log(routes);

  if (routes.isAuthenticated === false) {
    return <LoginScreen />;
  }

  switch (routes.currentRoute) {
    case "/":
      return <DashboardScreen />;
    default:
      return <div>Ocorreu um erro</div>;
  }
};
