import { types } from "../types";
import firebase, { googleAuthProvider } from '../firebase/firebase-config'

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
})

export const logout = () => ({
  type: types.logout
})


export const startGoogleLogin = () => {
  return async (dispatch) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    dispatch(login(user.uid, user.displayName))
  }
}

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
  }
}