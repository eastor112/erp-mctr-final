import { types } from "../types";


export const authFirebaseReducer = (state = { isAuthenticated: false }, action) => {
  switch (action.type) {

    case types.login:
      return {
        ...action.payload,
        isAuthenticated: true,
        isAdmin: false
      }

    case types.logout:
      return {
        isAuthenticated: false
      }

    case types.isadmin:
      return {
        ...state,
        isAdmin: action.payload
      }

    default:
      return state;
  }
}