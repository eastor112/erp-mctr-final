import { types } from "../types";


export const authReducer = (state = {}, action) => {
  switch (action.payload) {

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