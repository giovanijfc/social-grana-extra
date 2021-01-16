import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import AppContext from "./contexts/appContext";
import { GuestNavigator } from "./navigators/GuestNavigator";
import { AuthenticatedNavigator } from "./navigators/AuthenticatedNavigator";

export const Routes = () => {
  const { userIsAuthenticated } = useContext(AppContext);

  return (
    <Router>
      {userIsAuthenticated ? <AuthenticatedNavigator /> : <GuestNavigator />}
    </Router>
  );
};
