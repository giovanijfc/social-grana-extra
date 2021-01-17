/* eslint-disable no-undef */

import { useHistory } from "react-router-dom";
import { start } from "../../executeActions/bot/start";

export const useOptionsHandler = () => {
  const history = useHistory();

  const navigateToExecute = () => {
    history.push("/execute-actions");
  };

  const navigateToPurchaseLicense = () => {
    //setCurrentRoute()
  };

  const navigateToEditAccounts = () => {
    history.push("/edit-accounts");
  };

  return {
    navigateToEditAccounts,
    navigateToPurchaseLicense,
    navigateToExecute,
  };
};
