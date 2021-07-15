import axios from "axios";

const BACKEND_URL = 'http://localhost:8000';

export const getUserDetail = async (id, token) => {
  const detailUserUrl = `${BACKEND_URL}/users-api/v1.0/user/${id}/detail`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(detailUserUrl, config);

  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}




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

    const response = await getUserDetail(user.id, token)
    return response.user;

  } else {
    return response.response;
  }

}