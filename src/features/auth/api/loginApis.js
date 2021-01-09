import { firebaseAuth, firebaseDatabase } from "../../../services/firebase";
import { treaterCodeErrorFirebase } from "../../../utils/firebaseUtils";

export const login = async (email, password) => {
  try {
    const response = await firebaseAuth.signInWithEmailAndPassword(
      email,
      password
    );

    return { type: "s", ...response };
  } catch (err) {
    return { type: "e", message: treaterCodeErrorFirebase(err.code) };
  }
};

export const register = async (email, password) => {
  try {
    const response = await firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    return { type: "s", ...response };
  } catch (err) {
    console.log(err);
    return { type: "e", message: treaterCodeErrorFirebase(err.code) };
  }
};
