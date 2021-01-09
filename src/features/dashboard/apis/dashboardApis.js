import { firebaseDatabase, firebaseAuth } from "../../../services/firebase";

export const getLicenses = async () => {
  const userUid = firebaseAuth.currentUser.uid;
  const response = await firebaseDatabase
    .collection("licenses")
    .doc(userUid)
    .get();

  return response.exists ? response.data() : response.exists;
};
