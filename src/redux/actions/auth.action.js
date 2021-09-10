import firebase from "firebase/app";
import { Provider } from "react-redux";
import auth from "../../firebase";

export const login = () => async (dispatch) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
