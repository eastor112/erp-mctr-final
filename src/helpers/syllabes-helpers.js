import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + '/syllabes-api/v1.0';



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


export const getFilteredSyllabesSummary = async (cycle, year, semester, status, school, search, token) => {
  const url = `${BACKEND_URL}/summary?cycle=${cycle}&year=${year}&semester=${semester}&status=${status}&school=${school}&search=${search}`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }


  const response = await axios.get(url, config)

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }

}
