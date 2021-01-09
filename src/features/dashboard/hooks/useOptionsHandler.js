import { useContext } from "react";
import RoutesContext from "../../../routes/RoutesContext";

export const useOptionsHandler = () => {
  const { setCurrentRoute } = useContext(RoutesContext);

  const navigateToExecute = () => {
    console.log("TODO: NAVIGATE TO EXECUTE");
    //setCurrentRoute()
  };

  const navigateToPurchaseLicense = () => {
    console.log("TODO: NAVIGATE TO PURCHASE LICENSE");
    //setCurrentRoute()
  };

  const navigateToEditAccounts = () => {
    setCurrentRoute("/edit-accounts");
  };

  return {
    navigateToEditAccounts,
    navigateToPurchaseLicense,
    navigateToExecute,
  };
};
