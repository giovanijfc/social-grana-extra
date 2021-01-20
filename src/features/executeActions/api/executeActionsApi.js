import { firebaseDatabase, firebaseAuth } from "../../../services/firebase";

export const getAccounts = async () => {
  const userId = firebaseAuth.currentUser.uid;
  const accounts = await firebaseDatabase
    .collection("accounts")
    .doc(userId)
    .get();

  return accounts.exists ? accounts.data().values : accounts.exists;
};
