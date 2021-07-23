import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;



export const getAllSyllabes = async (token) => {
  const getAllSyllabesUrl = `${BACKEND_URL}/syllabes-api/v1.0/`;

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