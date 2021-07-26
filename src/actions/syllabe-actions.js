import { getAllSyllabeData, getSyllabeSummary } from "../helpers/syllabes-helpers"
import { types } from "../types"


export const getSyllabeDetailData = (summary, syllabe) => {
  return {
    type: types.actualSyllabe,
    payload: {
      actualSyllabeSummary: { ...summary },
      actualSyllabe: { ...syllabe }
    }
  }
}



export const startGetSyllabeDetailData = (pk, token) => {

  return async (dispatch) => {
    const syllabe = await getAllSyllabeData(pk, token);
    const summary = await getSyllabeSummary(pk, token);

    dispatch(getSyllabeDetailData(summary, syllabe));
  }
}
