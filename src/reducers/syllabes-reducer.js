import { types } from "../types"

const initialState = {
  actualSyllabeSummary: {},
  actualSyllabe: {},
  professorMedia: {},
  directorMedia: {},
  courses: []
}

export const syllabesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllCourses:
      return {
        ...state,
        courses: action.payload
      }

    case types.updateActualSyllabe:
      return {
        ...state,
        actualSyllabe: action.payload
      }

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
