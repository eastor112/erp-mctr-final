import { types } from "../types"

const initialState = {
  actualSyllabeSummary: {},
  actualSyllabe: {}
}

export const syllabesReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.actualSyllabe:
      return {
        ...state,
        actualSyllabeSummary: action.payload.actualSyllabeSummary,
        actualSyllabe: action.payload.actualSyllabe
      }

    default:
      return state;
  }
}
