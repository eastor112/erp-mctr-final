import axios from "axios";

const BACKEND_URL = 'http://localhost:8000'

//Login de un usuario existente en la base de datos
export const loginApiHelper = async (email, password) => {
  const url = `${BACKEND_URL}/users-api/v1.0/login`;

  const data = {
    'email': email,
    'password': password
  }

  const config = {
    header: { 'Content-Type': 'application/json' }
  }

  try {
    const user = await axios.post(url, data, config)
    return user
  } catch (error) {
    return error.response
  }
}


//Creacion de un nuevo usuario en la API
export const createUserApiHelper = async (email, password) => {

  const url = `${BACKEND_URL}/users-api/v1.0/register`;

  const data = {
    "email": email,
    "password1": password,
    "password2": password
  }

  const config = {
    header: { 'Content-Type': 'application/json' }
  }

  try {
    const user = await axios.post(url, data, config)
    return user
  } catch (error) {
    return error.response
  }
}


//Login or Creacion de un usuario en la API (Mezcla de las 2 funciones anteriores)
export const loginOrCreateUserApiHelper = async (email, password) => {
  const loginResponse = await loginApiHelper(email, password);

  if (loginResponse.status === 200) {
    return loginResponse

  } else {
    const createResponse = await createUserApiHelper(email, password);

    if (createResponse.status === 200) {
      const loginResponse = await loginApiHelper(email, password);
      return loginResponse
    }
  }
}