import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getCourseDetail = async (idCourse, token) => {
  const getCourseDetailURL = `${BACKEND_URL}/courses-api/v1.0/${idCourse}`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(getCourseDetailURL, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}