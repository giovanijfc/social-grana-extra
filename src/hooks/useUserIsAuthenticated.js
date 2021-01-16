import { useLayoutEffect, useState } from "react";
import { firebaseAuth } from "../services/firebase";

export const useUserIsAuthenticated = () => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(undefined);

  useLayoutEffect(() => {
    const unsubscribeOnAuthStateChanged = firebaseAuth.onAuthStateChanged(
      (user) => {
        setUserIsAuthenticated(Boolean(user));
      }
    );

    return () => {
      unsubscribeOnAuthStateChanged();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return userIsAuthenticated;
};
