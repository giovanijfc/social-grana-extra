import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../features/auth/screens/LoginScreen";

export const GuestNavigator = () => (
  <Switch>
    <Route path="/login" component={LoginScreen} />

    <Redirect to="/login" />
  </Switch>
);
