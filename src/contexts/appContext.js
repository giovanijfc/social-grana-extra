const { createContext } = require("react");

const defaultAppContextValue = {
  userIsAuthenticated: undefined,
};

const AppContext = createContext(defaultAppContextValue);

export default AppContext;
