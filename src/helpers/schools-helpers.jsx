import axios from "axios"

const BACKEND_URL = 'http://localhost:8000'

export const getShoolData = async (schoolId, token) => {
  const url = `${BACKEND_URL}/unt-structure-api/v1.0/school/${schoolId}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }
  const response = await axios.get(url, config)

  if (response.status === 200) {
    return response.data
  } else {
    return response.response
  }
}