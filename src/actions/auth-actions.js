import { types } from "../types";
import firebase, { googleAuthProvider } from '../firebase/firebase-config'
import axios from "axios";
import { createUserApiHelper, loginApiHelper, loginOrCreateUserApiHelper } from "../helpers/auth-helpers";

// Acciones con el store
export const login = (uid, email, displayName, photoURL, user = {}, token) => ({
  type: types.login,
  payload: {
    uid,
    email,
    displayName,
    photoURL,
    user,
    token
  }
})

export const logout = () => ({
  type: types.logout
})



// Acciones con Google
export const startGoogleLogin = () => {
  return async (dispatch) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);

    const response = await loginOrCreateUserApiHelper(user.email, user.uid)

    dispatch(login(
      user.uid,
      user.email,
      user.displayName,
      user.photoURL,
      response.data.user,
      response.data.token));

  }
}

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
  }
}
