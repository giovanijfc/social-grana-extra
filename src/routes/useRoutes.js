import { useState, useLayoutEffect } from "react";

export const useRoutes = () => {
  const [currentRoute, setCurrentRoute] = useState("/");
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useLayoutEffect(() => {
    isAuthenticated === false
      ? setCurrentRoute("/login")
      : setCurrentRoute("/");
  }, [isAuthenticated]);

  return {
    currentRoute,
    setCurrentRoute,
    isAuthenticated,
    setIsAuthenticated,
  };
};
