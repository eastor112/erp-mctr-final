import { getAllSyllabeData, getSyllabeSummary } from "../helpers/syllabes-helpers"
import { getMediaFilesUser } from "../helpers/users-helpers"
import { types } from "../types"


export const getSyllabeDetailData = (summary, syllabe, professorMedia, directorMedia) => {
  return {
    type: types.actualSyllabe,
    payload: {
      actualSyllabeSummary: { ...summary },
      actualSyllabe: { ...syllabe },
      professorMedia: { ...professorMedia },
      directorMedia: { ...directorMedia }
    }
  }
}



export const startGetSyllabeDetailData = (pk, token) => {

  return async (dispatch) => {
    const syllabe = await getAllSyllabeData(pk, token);
    const summary = await getSyllabeSummary(pk, token);

    let professorMedia = {}
    let directorMedia = {}

    try {
      professorMedia = await getMediaFilesUser(syllabe.principalprofessor.id, token)
    } catch (error) {
      professorMedia = { error: 'El usuario no ha subido su archivo' }
    }
    try {
      directorMedia = await getMediaFilesUser(syllabe.director.id, token)
    } catch (error) {
      directorMedia = { error: 'El usuario no ha subido su archivo' }
    }

    dispatch(getSyllabeDetailData(summary, syllabe, professorMedia, directorMedia));
  }
}
