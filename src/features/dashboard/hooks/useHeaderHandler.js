import { firebaseAuth } from "../../../services/firebase";
import { useState } from "react";

export const useHeaderHandler = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onPressLogout = async () => {
    setIsLoading(true);
    await firebaseAuth.signOut();
    setIsLoading(false);
  };

  return { email: firebaseAuth.currentUser.email, onPressLogout, isLoading };
};
