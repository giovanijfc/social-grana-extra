import { createContext } from "react";

const defaultRoutesContext = {
  currentRoute: "/",
  isAuthenticated: undefined,
  setCurrentRoute: () => {},
  setIsAuthenticated: () => {},
};

const RoutesContext = createContext(defaultRoutesContext);

export default RoutesContext;
