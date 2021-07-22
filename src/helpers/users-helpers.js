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


export const updateUser = async (user, media = null, token) => {
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

  await axios.patch(upadateUserUrl, generalData, config);



  if (boss) {
    await axios.patch(updatePermissionsURL, permissionsData, config);
  }


  if (professor || director || boss) {
    await axios.patch(updateProfessorUrl, professorData, config);
  }


  if (student) {
    await axios.patch(updateStudentUrl, studentData, config);
  }


  if (signature !== '' || photo !== '') {
    if (media.signature || media.profile) {
      await axios.patch(updateMediaUrl, formdata, config);
    } else {
      await axios.post(createMediaUrl, formdata, config);
    }
  }


  const response = await getUserDetail(user.id, token)
  try {
    return response.user;
  } catch (error) {
    return response.response;
  }

}


export const getAllUser = (token) => {
  const allUsersUrl = `${BACKEND_URL}/users-api/v1.0/list`

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

