import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + '/syllabes-api/v1.0';


//Trae el resumen de todos los silabos
export const getAllSyllabesSummary = async (token) => {
  const getAllSyllabesUrl = `${BACKEND_URL}/summary`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(getAllSyllabesUrl, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


//Trae el resumen de un silabo
export const getSyllabeSummary = async (id, token) => {
  const url = `${BACKEND_URL}/summary/${id}`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios(url, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


//Trae los silabos filtrados
export const getFilteredSyllabesSummary = async (cycle, year, semester, status, school, search, token) => {
  const url = `${BACKEND_URL}/summary?cycle=${cycle}&year=${year}&semester=${semester}&status=${status}&school=${school}&search=${search}`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }


  const response = await axios.get(url, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }

}


export const getBaseSyllabeData = async (id, token) => {
  const url = `${BACKEND_URL}/${id}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(url, config);


  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}



export const getAllSyllabeData = async (id, token) => {
  const url = `${BACKEND_URL}/${id}/full`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(url, config);


  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}



export const createSyllabe = async (idCourse, token) => {
  const url = `${BACKEND_URL}/`;

  const data = {
    course: idCourse
  }

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.post(url, data, config);

  if (response.status === 201) {
    return response.data;
  } else {
    return response.response;
  }
}



export const updateGeneralData = async (pk, data, token) => {
  const url = `${BACKEND_URL}/${pk}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }


  const response = await axios.patch(url, data, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }

}



export const createResource = async (resource, token) => {
  const url = `${BACKEND_URL}/resource`

  const data = {
    ...resource
  }

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.post(url, data, config);

  if (response.status === 201) {
    return response.data;
  } else {
    return response.response;
  }
}



export const deleteResource = async (id, token) => {
  const url = `${BACKEND_URL}/resource/${id}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.delete(url, config);


  if (response.status === 204) {
    return 'resource deleted';
  } else {
    return response.response;
  }
}



export const createUnit = async (unit, token) => {
  const url = `${BACKEND_URL}/units`

  const data = {
    ...unit
  }

  const config = {
    headers: {
      Authorization: `token ${token}`
    }
  }

  const response = await axios.post(url, data, config);


  if (response.status === 201) {
    return response.data;
  } else {
    return response.response;
  }
}



export const getFullUnitInfo = async (id, token) => {
  const url = `${BACKEND_URL}/units/${id}/full`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(url, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}



export const deleteUnit = async (id, token) => {
  const url = `${BACKEND_URL}/units/${id}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.delete(url, config);

  if (response.status === 204) {
    return 'unit deleted';
  } else {
    return response.response;
  }
}


export const updateUnit = async (id, unit, token) => {
  const url = `${BACKEND_URL}/units/${id}`

  const data = { ...unit }

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }


  const response = await axios.patch(url, data, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


export const createCapability = async (capability, token) => {
  const url = `${BACKEND_URL}/capabilities`

  const data = {
    ...capability
  }

  const config = {
    headers: {
      Authorization: `token ${token}`
    }
  }

  const response = await axios.post(url, data, config);


  if (response.status === 201) {
    return response.data;
  } else {
    return response.response;
  }
}


export const getFullCapability = async (id, token) => {
  const url = `${BACKEND_URL}/capabilities/${id}/full`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(url, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


export const deleteCapabilityUnit = async (id, token) => {
  const url = `${BACKEND_URL}/capabilities/${id}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.delete(url, config);

  if (response.status === 204) {
    return 'capability deleted';
  } else {
    return response.response;
  }
}


export const createOutcome = async (outcome, token) => {
  const url = `${BACKEND_URL}/outcomes`

  const data = {
    ...outcome
  }

  const config = {
    headers: {
      Authorization: `token ${token}`
    }
  }

  const response = await axios.post(url, data, config);


  if (response.status === 201) {
    return response.data;
  } else {
    return response.response;
  }
}


export const deleteOutcomeUnit = async (id, token) => {
  const url = `${BACKEND_URL}/outcomes/${id}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.delete(url, config);

  if (response.status === 204) {
    return 'outcome deleted';
  } else {
    return response.response;
  }
}


export const updateWeekUnit = async (id, week, token) => {
  const url = `${BACKEND_URL}/week/${id}`

  const data = { ...week }

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }


  const response = await axios.patch(url, data, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


export const deleteSyllabe = async (id, token) => {
  const url = `${BACKEND_URL}/${id}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.delete(url, config);

  if (response.status === 204) {
    return 'syllabe deleted';
  } else {
    return response.response;
  }
}



