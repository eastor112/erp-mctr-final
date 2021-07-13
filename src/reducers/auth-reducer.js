import { types } from "../types";


export const authFirebaseReducer = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {

    case types.login:
      return {
        ...action.payload,
        isAuthenticated: true
      }

    case types.logout:
      return {
        isAuthenticated: false
      }

    default:
      return state;
  }
}