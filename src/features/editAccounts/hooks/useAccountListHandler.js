import { listenerAccounts, removeAccount } from "../api/editAccountsApis";
import { useEffect, useState } from "react";

export const useAccountListHandler = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listenerAccounts((accounts) => {
      setAccounts(accounts.values || []);
      isLoading && setIsLoading(false);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickRemoveAccount = (account) => {
    removeAccount(account);
  };

  return { accounts, isLoading, onClickRemoveAccount };
};
