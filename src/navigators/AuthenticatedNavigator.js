import { Switch, Route } from "react-router-dom";
import { DashboardScreen } from "../features/dashboard/screens/DashboardScreen";
import { EditAccountsScreen } from "../features/editAccounts/screens/EditAccountsScreen";

export const AuthenticatedNavigator = () => (
  <Switch>
    <Route exact path="/" component={DashboardScreen} />
    <Route path="/edit-accounts" component={EditAccountsScreen} />
  </Switch>
);
