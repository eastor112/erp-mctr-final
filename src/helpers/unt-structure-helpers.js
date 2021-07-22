import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const getShoolData = async (schoolId, token) => {
  const schoolDetailUrl = `${BACKEND_URL}/unt-structure-api/v1.0/school/${schoolId}`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }
  const response = await axios.get(schoolDetailUrl, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


export const getAllSchools = async (token) => {
  const schoolListUrl = `${BACKEND_URL}/unt-structure-api/v1.0/school`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(schoolListUrl, config);
  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


export const getAllFaculty = async (token) => {
  const url = `${BACKEND_URL}/unt-structure-api/v1.0/faculty`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(url, config)

  if (response.status === 200) {
    return response;
  } else {
    return response.response;
  }

}


export const getAllDepartment = async (token) => {
  const url = `${BACKEND_URL}/unt-structure-api/v1.0/department`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(url, config)

  if (response.status === 200) {
    return response;
  } else {
    return response.response;
  }

}