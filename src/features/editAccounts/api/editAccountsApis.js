import firebase from "firebase";
import { firebaseDatabase, firebaseAuth } from "../../../services/firebase";

export const addAccount = async (email, password, nickname) => {
  const userId = firebaseAuth.currentUser.uid;

  try {
    await firebaseDatabase
      .collection("accounts")
      .doc(userId)
      .update({
        values: firebase.default.firestore.FieldValue.arrayUnion({
          email,
          password,
          nickname,
        }),
      });
  } catch (_) {
    await firebaseDatabase
      .collection("accounts")
      .doc(userId)
      .set({
        values: [
          {
            email,
            password,
            nickname,
          },
        ],
      });
  }
};

export const listenerAccounts = async (callback) => {
  const userId = firebaseAuth.currentUser.uid;
  firebaseDatabase
    .collection("accounts")
    .doc(userId)
    .onSnapshot({ includeMetadataChanges: true }, (response) => {
      callback(response.exists ? response.data() : false);
    });
};

export const removeAccount = async (account) => {
  const userId = firebaseAuth.currentUser.uid;
  try {
    await firebaseDatabase
      .collection("accounts")
      .doc(userId)
      .update({
        values: firebase.default.firestore.FieldValue.arrayRemove(account),
      });
  } catch (_) {
    console.log(_);
  }
};
