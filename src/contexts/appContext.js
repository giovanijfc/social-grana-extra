const { createContext } = require("react");

const defaultAppContextValue = {
  userIsAuthenticated: undefined,
  windowRunBot: undefined,
  setWindowRunBot: () => {},
};

const AppContext = createContext(defaultAppContextValue);

export default AppContext;
