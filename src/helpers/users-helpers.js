import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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


export const updateUser = async (user, media = null, isBoss, token) => {
  const upadateUserUrl = `${BACKEND_URL}/users-api/v1.0/user/${user.id}`;
  const updateStudentUrl = `${BACKEND_URL}/users-api/v1.0/student/${user.id}`;
  const updateProfessorUrl = `${BACKEND_URL}/users-api/v1.0/professor/${user.id}`;
  const createMediaUrl = `${BACKEND_URL}/users-api/v1.0/user/media/create`;
  const updateMediaUrl = `${BACKEND_URL}/users-api/v1.0/user/media/${user.id}`;
  const updatePermissionsURL = `${BACKEND_URL}/users-api/v1.0/user/${user.id}/admin`;

  const {
    id,
    names,
    fathername,
    mothername,
    email,
    typeuser,
    mobilenumber,
    school,
    codestudent,
    graduate,
    codeprofessor,
    category,
    career,
    grade,
    typeServices,
    dedication,
    supportposition,
    signature,
    photo,
    professor,
    student,
    boss,
    director,
    external,
    is_active } = user


  const generalData = {//general user data
    id,
    names,
    fathername,
    mothername,
    email,
    typeuser,
    mobilenumber,
    school
  }

  const studentData = {// student user data
    id,
    codestudent,
    graduate
  }

  const professorData = {// professor user data
    id,
    codeprofessor,
    names,
    fathername,
    mothername,
    category,
    career,
    grade,
    typeServices,
    dedication,
    supportposition
  }

  const permissionsData = {
    id,
    is_active,
    director,
    professor,
    student,
    external
  }

  const formdata = new FormData();
  formdata.append('user', id);
  formdata.append('signature', signature);
  formdata.append('profile', photo)

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  if (isBoss) {
    const r1 = await axios.patch(updatePermissionsURL, permissionsData, config);
  }

  const r2 = await axios.patch(upadateUserUrl, generalData, config);


  if (professor || director || boss) {
    const r3 = await axios.patch(updateProfessorUrl, professorData, config);
  }


  if (student) {
    const r4 = await axios.patch(updateStudentUrl, studentData, config);
  }


  if (signature !== '' || photo !== '') {
    if (media.signature || media.profile) {
      const r5 = await axios.patch(updateMediaUrl, formdata, config);
    } else {
      const r6 = await axios.post(createMediaUrl, formdata, config);
    }
  }


  const response = await getUserDetail(user.id, token)
  try {
    return response.user;
  } catch (error) {
    return response.response;
  }

}


export const getAllUser = (school, token) => {
  const allUsersUrl = `${BACKEND_URL}/users-api/v1.0/list?school=${school}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  return axios.get(allUsersUrl, config)

}


export const deleteUserAccount = async (id, token) => {
  const deleteUserUrl = `${BACKEND_URL}/users-api/v1.0/user/${id}`;

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  };

  const response = await axios.delete(deleteUserUrl, config);

  if (response.status === 204) {
    return response.status;
  } else {
    return response.response;
  }

}


export const filterUsersBySchoolAndLastname = async (school, lastname, token) => {
  const allUsersUrl = `${BACKEND_URL}/users-api/v1.0/list?school=${school}&lastname=${lastname}`

  const config = {
    headers: {
      'Authorization': `token ${token}`
    }
  }

  const response = await axios.get(allUsersUrl, config);
  if (response.status === 200) {
    return response.data;
  } else {
    return response.response;
  }
}


export const getMediaFilesUser = async (user, token) => {
  const url = `${BACKEND_URL}/users-api/v1.0/user/media/${user}`
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