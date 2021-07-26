import { types } from "../types"

const initialState = {
  actualSyllabeSummary: {},
  actualSyllabe: {},
  professorMedia: {},
  directorMedia: {}
}

export const syllabesReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.actualSyllabe:
      return {
        ...state,
        actualSyllabeSummary: action.payload.actualSyllabeSummary,
        actualSyllabe: action.payload.actualSyllabe,
        professorMedia: action.payload.professorMedia,
        directorMedia: action.payload.directorMedia
      }

    default:
      return state;
  }
}
