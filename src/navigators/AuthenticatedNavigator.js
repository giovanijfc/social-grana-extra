import { Switch, Route } from "react-router-dom";
import { DashboardScreen } from "../features/dashboard/screens/DashboardScreen";
import { EditAccountsScreen } from "../features/editAccounts/screens/EditAccountsScreen";
import { ExecuteActionsScreen } from "../features/executeActions/screens/ExecuteActionsScreen";

export const AuthenticatedNavigator = () => (
  <Switch>
    <Route exact path="/" component={DashboardScreen} />
    <Route path="/edit-accounts" component={EditAccountsScreen} />
    <Route path="/execute-actions" component={ExecuteActionsScreen} />
  </Switch>
);
