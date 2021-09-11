import firebase from "firebase/app";
import auth from "../../firebase";
import {
  LOGIN_REQUEST,
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionTypes";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    //we have to add scope to the provider. you can find you suitable scope with this link 
    //https://developers.google.com/youtube/v3/guides/auth/installed-apps
    
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user ", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const log_out = () => async (dispatch) => {


    await auth.signOut();
    dispatch({ 
        type:LOG_OUT
    })
    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");


};
