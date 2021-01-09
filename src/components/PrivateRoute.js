import React from "react";

import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated, screen }) => (
  <Route
    render={({ location }) =>
      isAuthenticated ? (
        screen
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      )
    }
  />
);
