import axios from "axios";

const BACKEND_URL = 'http://localhost:8000';

export const updateUser = async (user, token) => {
  const upadateUserUrl = `${BACKEND_URL}/users-api/v1.0/user/${user.id}`

  const data = user

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.put(upadateUserUrl, data, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}