import React, { useContext } from "react";
import routesContext from "./RoutesContext";
import { LoginScreen } from "../features/auth/screens/LoginScreen";
import { DashboardScreen } from "../features/dashboard/screens/DashboardScreen";
import { EditAccountsScreen } from "../features/editAccounts/screens/EditAccountsScreen";

export const Routes = () => {
  const routes = useContext(routesContext);

  console.log(routes);

  if (routes.isAuthenticated === false) {
    return <LoginScreen />;
  }

  switch (routes.currentRoute) {
    case "/":
      return <DashboardScreen />;
    case "/edit-accounts":
      return <EditAccountsScreen />;
    default:
      return <div>Ocorreu um erro</div>;
  }
};
